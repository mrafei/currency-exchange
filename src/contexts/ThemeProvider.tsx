import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import type { HOCFunctionalComponent } from "@_types/components";

const ThemeProvider: HOCFunctionalComponent = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#009688",
      },
      secondary: {
        main: "#94c720",
      },
      background: {
        default: "#ffffff",
        paper: "#f2f2f2",
      },
      warning: { main: "#c70d38" },
      text: {
        primary: "#404040",
        secondary: "#8d8d8d",
        disabled: "#989898",
      },
      info: {
        main: "#0288D1",
        light: "#E6F3FA",
      },
    },
    typography: {
      fontSize: 16,
      h1: {
        fontSize: 48,
        fontWeight: "bold",
      },
      h2: {
        fontSize: 24,
        fontWeight: "bold",
      },
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
export default ThemeProvider;
