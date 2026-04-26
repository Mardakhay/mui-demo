import { useState } from 'react';
import {
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Divider,
  Stack,
  Typography,
  Paper,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

export default function LoginFormSection() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const emailError = email && !email.includes('@')
    ? 'Email formatı düzgün deyil' : '';

  const handleLogin = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
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
        🔗 Birləşdirilmiş Nümunə
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Card + TextField + Button = Login Forması
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          py: 4,
          px: 2,
          borderRadius: 3,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          minHeight: 420,
          alignItems: 'center',
        }}
      >
        <Card
          elevation={8}
          sx={{
            maxWidth: 420,
            width: '100%',
            borderRadius: 3,
            animation: 'slideUp 0.6s ease',
            '@keyframes slideUp': {
              from: { opacity: 0, transform: 'translateY(20px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <CardHeader
            title="🔐 Daxil ol"
            subheader="Hesabınıza daxil olun"
          />
          <CardContent>
            <Stack spacing={2.5}>
              <TextField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!emailError}
                helperText={emailError}
                fullWidth
                placeholder="admin@example.com"
              />
              <TextField
                label="Şifrə"
                type="password"
                variant="filled"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                placeholder="••••••••"
              />
            </Stack>
          </CardContent>
          <Divider />
          <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
            <Button variant="text">
              Şifrəni unutdum?
            </Button>
            <Button
              variant="contained"
              startIcon={<SendIcon />}
              disabled={!email || !password || !!emailError}
              onClick={handleLogin}
            >
              Daxil ol
            </Button>
          </CardActions>
        </Card>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>
          Bu nümunədə istifadə olunan MUI komponentləri:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          {[
            'ThemeProvider',
            'CssBaseline',
            'Card',
            'CardHeader',
            'CardContent',
            'CardActions',
            'TextField',
            'Button',
            'Stack',
            'Divider',
            'SendIcon',
            'useState',
          ].map((item) => (
            <Box
              key={item}
              sx={{
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                bgcolor: 'primary.50',
                background: 'rgba(25,118,210,0.08)',
                color: 'primary.main',
                fontSize: '0.8rem',
                fontWeight: 500,
                fontFamily: 'monospace',
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      </Box>

      <Snackbar open={showSuccess} autoHideDuration={3000} onClose={() => setShowSuccess(false)}>
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          Uğurla daxil oldunuz! 🎉
        </Alert>
      </Snackbar>
    </Paper>
  );
}