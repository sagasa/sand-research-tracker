import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#101417",
      paper: "#171c1f",
    },
    primary: {
      main: "#5fb3ff",
    },
    secondary: {
      main: "#ffb15f",
    },
    success: {
      main: "#78d389",
    },
    warning: {
      main: "#ffd166",
    },
    error: {
      main: "#ff6b6b",
    },
    divider: "rgba(255,255,255,0.12)",
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily:
      '"Inter", "Segoe UI", "Hiragino Sans", "Yu Gothic UI", "Meiryo", sans-serif',
    h1: {
      fontSize: "1.45rem",
      fontWeight: 700,
      letterSpacing: 0,
    },
    h2: {
      fontSize: "1.1rem",
      fontWeight: 700,
      letterSpacing: 0,
    },
    button: {
      textTransform: "none",
      letterSpacing: 0,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiSelect: {
      defaultProps: {
        size: "small",
      },
    },
  },
});
