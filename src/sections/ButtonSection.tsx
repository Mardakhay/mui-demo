import { useState } from 'react';
import {
  Button,
  Stack,
  CircularProgress,
  Typography,
  Box,
  Paper,
} from '@mui/material';
import {
  Send as SendIcon,
  Delete as DeleteIcon,
  Download as DownloadIcon,
  Add as AddIcon,
} from '@mui/icons-material';

export default function ButtonSection() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 3,
        background: 'rgba(255,255,255,0.7)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(25,118,210,0.08)',
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
        🔘 Button Komponenti
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        variant · color · size · icon · disabled
      </Typography>

      <SectionLabel>Contained</SectionLabel>
      <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap' }}>
        <Button variant="contained">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
      </Stack>

      <SectionLabel>Outlined</SectionLabel>
      <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap' }}>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" color="error">Error</Button>
      </Stack>

      <SectionLabel>Text</SectionLabel>
      <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap' }}>
        <Button variant="text">Primary</Button>
        <Button variant="text" color="secondary">Secondary</Button>
        <Button variant="text" color="error">Error</Button>
      </Stack>

      <SectionLabel>Sizes</SectionLabel>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>

      <SectionLabel>With Icons</SectionLabel>
      <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap' }}>
        <Button variant="contained" startIcon={<SendIcon />}>Göndər</Button>
        <Button variant="outlined" startIcon={<DeleteIcon />} color="error">Sil</Button>
        <Button variant="contained" endIcon={<DownloadIcon />} color="success">Yüklə</Button>
        <Button variant="text" endIcon={<AddIcon />} color="secondary">Əlavə et</Button>
      </Stack>

      <SectionLabel>States</SectionLabel>
      <Stack direction="row" spacing={1.5} sx={{ flexWrap: 'wrap' }}>
        <Button variant="contained" disabled>Disabled</Button>
        <Button variant="outlined" disabled>Disabled</Button>
        <Button variant="contained" disabled={isLoading} onClick={handleLoadingDemo}>
          {isLoading ? (
            <><CircularProgress size={18} sx={{ mr: 1, color: 'inherit' }} /> Yüklənir...</>
          ) : 'Loading Demo'}
        </Button>
      </Stack>

      <SectionLabel>Full Width</SectionLabel>
      <Box>
        <Button variant="contained" fullWidth startIcon={<SendIcon />} sx={{ mb: 1 }}>
          Tam Eni ilə Düymə
        </Button>
        <Button variant="outlined" fullWidth color="secondary">
          Tam Eni ilə Outlined
        </Button>
      </Box>
    </Paper>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      variant="overline"
      sx={{
        mt: 3,
        mb: 1,
        display: 'block',
        color: 'text.secondary',
        fontWeight: 600,
        letterSpacing: 1,
      }}
    >
      {children}
    </Typography>
  );
}
