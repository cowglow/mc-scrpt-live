import { createMuiTheme } from '@material-ui/core'
import PressStart2PRegular from '../fonts/PressStart2P-Regular.woff2'
import ShareTechMonoRegular from '../fonts/ShareTechMono-Regular.woff2'

const PressStart2P = {
  fontFamily: '"Press Start 2P"',
  fontSize: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local("Press Start 2P"),
    local("PressStart2P"),
    url("${PressStart2PRegular}") format('woff2')
  `
}

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
