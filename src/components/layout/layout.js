import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core'

import HeaderComponent from '../header-component/header-component'
import FooterComponent from '../footer-component/footer-component'

import theme from '../../lib/theme'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.default
  }
})

const Layout = ({ children, classes }) => {
  return (
    <ThemeProvider theme={theme}>
      <Container classes={classes}>
        <HeaderComponent/>
        {children}
        <FooterComponent/>
      </Container>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Layout)
