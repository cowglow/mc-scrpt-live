import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { withStyles } from '@material-ui/core'

import theme from '../../lib/theme'

import HeaderComponent from '../header-component/header-component'
import FooterComponent from '../footer-component/footer-component'
import { backgroundImage } from '../../lib/background-image'

const styles = theme => ({
  header: {
    background: backgroundImage(2),
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.down('xs')]: {
      height: '100vh'
    },
    [theme.breakpoints.up('sm')]: {
      height: '60.5vh'
    }
  },
  main: {
    backgroundColor: theme.palette.background.paper
  },
  footer: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
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
        <FooterComponent/>
      </Grid>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles(theme))(Layout)
