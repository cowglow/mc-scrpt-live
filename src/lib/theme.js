import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FF0000'
    },
    secondary: {
      main: '#660000'
    },
    light: {
      main: '#FFFFFF'
    },
    background: {
      paper: '#000000'
    }
  },
  typography: {
    fontFamily: `"Press Start 2P", sans-serif`
  },
  base: {}
})

export default theme
