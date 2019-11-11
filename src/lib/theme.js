import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF0000'
    },
    secondary: {
      main: '#960000'
    },
    light: {
      main: '#FFFFFF'
    },
    background: {
      paper: '#FFFFFF',
      default: '#000000'
    }
  },
  typography: {
    fontFamily: `"Press Start 2P", sans-serif`,
    body1: {
      fontFamily: `"Share Tech Mono", sans-serif`
    }
  },
  base: {
    root: {
      flexGrow: 1
    }
  }
});

export default theme
