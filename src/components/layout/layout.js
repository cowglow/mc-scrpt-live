import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import { withStyles } from '@material-ui/core'

import HeaderComponent from '../header-component/header-component'
import FooterComponent from '../footer-component/footer-component'

import theme from '../../lib/theme'

const styles = theme => ({
  header: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(12),
    margin: theme.spacing(0)
  },
  main: {
    backgroundColor: theme.palette.background.paper
  },
  footer: {
    backgroundColor: theme.palette.background.default
  }
});

const Layout = ({ children, classes }) => {
  return (
    <ThemeProvider theme={theme}>
      <Grid container className={classes.header}>
        <Container>
          <HeaderComponent/>
        </Container>
      </Grid>

      <Container className={classes.main}>{children}</Container>

      <Grid className={classes.footer}>
        <Container>
          <FooterComponent/>
        </Container>
      </Grid>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Layout)
