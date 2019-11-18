import { createMuiTheme } from '@material-ui/core'
import PressStart2PWoff2 from '../fonts/PressStart2P-Regular.woff2'
import ShareTechMonoWoff2 from '../fonts/ShareTechMono-Regular.woff2'

const PressStart2P = {
  fontFamily: 'Press Start 2p',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Press Start 2P'),
    local('PressStart2P'),
    url(${PressStart2PWoff2}) format('woff2')
  `
}

const ShareTechMono = {
  fontFamily: 'Share Tech Mono',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Share Tech Mono'),
    local('ShareTechMono'),
    url(${ShareTechMonoWoff2}) format('woff2')
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
    fontFamily: `"Press Start 2P", monospace, sans-serif`,
    body1: {
      fontFamily: `"Share Tech Mono", monospace, sans-serif`
    }
  },
  base: {
    root: {
      flexGrow: 1
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [PressStart2P, ShareTechMono]
      }
    }
  }
});

export default theme
