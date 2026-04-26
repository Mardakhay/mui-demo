import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Avatar,
  Chip,
  Divider,
  Typography,
  Stack,
  TextField,
  Button,
  LinearProgress,
  Paper,
  Box,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

export default function CardSection() {
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
        🃏 Card Komponenti
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        CardHeader · CardContent · CardActions · elevation · outlined
      </Typography>

      <SectionLabel>Elevated Cards</SectionLabel>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: 2.5,
        }}
      >
        <Card elevation={3} sx={{ transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: '#1976d2' }}>📈</Avatar>}
            title="Statistika"
            subheader="Bu Ay"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">Ümumi satışlar artıb</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <Chip label="2,847 sifariş" size="small" />
              <Chip label="+12.5%" size="small" color="success" />
            </Stack>
          </CardContent>
        </Card>

        <Card elevation={3} sx={{ transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: '#2e7d32' }}>👤</Avatar>}
            title="İstifadəçilər"
            subheader="Aktiv"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">Son 30 gündə</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <Chip label="1,234 nəfər" size="small" />
              <Chip label="89%" size="small" color="info" />
            </Stack>
          </CardContent>
        </Card>

        <Card elevation={3} sx={{ transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: '#7b1fa2' }}>✅</Avatar>}
            title="Tapşırıqlar"
            subheader="Sprint"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Tamamlanma</Typography>
            <LinearProgress variant="determinate" value={90} sx={{ borderRadius: 4, height: 6, mb: 1 }} />
            <Typography variant="caption" color="text.secondary">47/52 — 90%</Typography>
          </CardContent>
        </Card>
      </Box>

      <SectionLabel>Outlined Card + Form</SectionLabel>
      <Card variant="outlined" sx={{ transition: 'border-color 0.2s', '&:hover': { borderColor: 'primary.main' } }}>
        <CardHeader title="📝 Profil Formu" />
        <Divider />
        <CardContent>
          <Stack spacing={2}>
            <TextField label="Ad" placeholder="Adınızı daxil edin" fullWidth />
            <TextField label="Email" type="email" placeholder="email@example.com" fullWidth />
            <TextField label="Bio" placeholder="Haqqınızda" variant="filled" fullWidth multiline rows={2} />
          </Stack>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end', p: 2 }}>
          <Button variant="text" size="small">Ləğv et</Button>
          <Button variant="contained" size="small" startIcon={<SendIcon />}>Saxla</Button>
        </CardActions>
      </Card>

      <SectionLabel>Filled / Rəngli Cards</SectionLabel>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr 1fr' },
          gap: 2,
        }}
      >
        <Card sx={{ bgcolor: '#f5f5f5', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-3px)' } }}>
          <CardContent>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Small Card</Typography>
            <Typography variant="body2" color="text.secondary">Sadə kart</Typography>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: '#e3f2fd', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-3px)' } }}>
          <CardContent>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Info Card</Typography>
            <Typography variant="body2" color="text.secondary">Mavi fon</Typography>
          </CardContent>
        </Card>
        <Card sx={{ bgcolor: '#fce4ec', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-3px)' } }}>
          <CardContent>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Accent Card</Typography>
            <Typography variant="body2" color="text.secondary">Çəhrayı fon</Typography>
          </CardContent>
        </Card>
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
