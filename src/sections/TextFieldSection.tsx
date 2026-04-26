import { useState } from 'react';
import {
  TextField,
  Typography,
  Paper,
  Box,
} from '@mui/material';

export default function TextFieldSection() {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const emailError =
    emailValue && !emailValue.includes('@') ? 'Email formatı düzgün deyil' : '';

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
        ✏️ TextField Komponenti
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        outlined · filled · standard · error · multiline
      </Typography>

      <SectionLabel>Outlined (default)</SectionLabel>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
        <TextField
          label="Ad"
          placeholder="Adınızı daxil edin"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          helperText="Tam adınızı yazın"
          fullWidth
        />
        <TextField
          label="Email"
          type="email"
          placeholder="email@example.com"
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          error={!!emailError}
          helperText={emailError || ''}
          fullWidth
        />
      </Box>

      <SectionLabel>Filled</SectionLabel>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
        <TextField
          label="Telefon"
          variant="filled"
          placeholder="+994 XX XXX XX XX"
          fullWidth
        />
        <TextField
          label="Şifrə"
          type="password"
          variant="filled"
          placeholder="Minimum 8 simvol"
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          helperText={
            passwordValue.length > 0 && passwordValue.length < 8
              ? `${8 - passwordValue.length} simvol daha lazımdır`
              : passwordValue.length >= 8
              ? '✓ Kifayət qədər uzundur'
              : ''
          }
          fullWidth
        />
      </Box>

      <SectionLabel>Standard</SectionLabel>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
        <TextField label="Axtarış" variant="standard" placeholder="Axtar..." fullWidth />
        <TextField label="Veb-sayt" variant="standard" placeholder="https://example.com" fullWidth />
      </Box>

      <SectionLabel>Error State</SectionLabel>
      <TextField
        label="Email (xətalı)"
        error
        helperText="Bu sahə tələb olunur"
        fullWidth
      />

      <SectionLabel>Multiline (Textarea)</SectionLabel>
      <TextField
        label="Bio"
        multiline
        rows={3}
        placeholder="Haqqınızda..."
        fullWidth
      />
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
