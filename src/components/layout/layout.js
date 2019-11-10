import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import HeaderComponent from '../header-component/header-component'
import FooterComponent from '../footer-component/footer-component'
import SocialMedia from '../social-media/social-media'

import theme from '../../lib/theme'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <HeaderComponent/>
        {children}
        <FooterComponent>
          <SocialMedia/>
          <Typography variant="h5" align="center" gutterBottom>
            Philip Saa aka MC SCRPT
          </Typography>
        </FooterComponent>
      </Container>
    </ThemeProvider>
  )
}

export default Layout
