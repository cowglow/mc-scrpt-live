import { createMuiTheme, Theme } from "@material-ui/core";

const theme: Theme
  = createMuiTheme({
  palette: {
    primary: {
      main: "#FF0000"
    },
    secondary: {
      main: "#960000"
    },
    background: {
      paper: "#FFFFFF",
      default: "#000000"
    }
  },
  typography: {
    fontFamily: `"Press Start 2P", monospace, sans-serif`,
    body1: {
      fontFamily: `"Share Tech Mono", monospace, sans-serif`
    }
  },
});

export default theme;
