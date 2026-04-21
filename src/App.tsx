import { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Divider,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const theme = createTheme({
  typography: { fontFamily: "Roboto, sans-serif" },
  shape: { borderRadius: 10 },
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
  },
});

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailError =
    email && !email.includes("@")
      ? "Email formatı düzgün deyil"
      : "";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <Card
          elevation={8}
          sx={{ maxWidth: 420, width: "100%", borderRadius: 3 }}
        >
          <CardHeader
            title="Daxil ol"
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
              />

              <TextField
                label="Şifrə"
                type="password"
                variant="filled"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
              />
            </Stack>
          </CardContent>

          <Divider />

          <CardActions
            sx={{ justifyContent: "space-between", p: 2 }}
          >
            <Button variant="text">
              Şifrəni unutdum?
            </Button>

            <Button
              variant="contained"
              startIcon={<SendIcon />}
              disabled={!email || !password}
              onClick={() => alert("Login!")}
            >
              Daxil ol
            </Button>
          </CardActions>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
