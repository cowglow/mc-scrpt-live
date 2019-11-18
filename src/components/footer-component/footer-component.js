import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core'

import SocialMedia from '../social-media/social-media'

const styles = theme => ({
  root: {
    color: theme.palette.light.main,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6)
    },

    [theme.breakpoints.only('md')]: {
      padding: theme.spacing(4)
    },
    [theme.breakpoints.only('sm')]: {
      padding: theme.spacing(1)
    }
  },
  fontSizeControl: {
    [theme.breakpoints.only('sm')]: {
      fontSize: 18
    },
    [theme.breakpoints.only('xs')]: {
      fontSize: 12
    }
  },
  footer: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    backgroundColor: theme.palette.background.default
  }
});

const FooterComponent = ({ classes }) => {
  return (
    <Grid className={classes.footer}>
      <footer className={classes.root}>
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            className={classes.fontSizeControl}
          >
            Philip Saa aka MC SCRPT
          </Typography>
          <Container maxWidth={'sm'}>
            <SocialMedia/>
          </Container>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            className={classes.fontSizeControl}
          >
            All Rights Reserved. &copy; {new Date().getFullYear()}
          </Typography>
        </Container>
      </footer>
    </Grid>
  );
};

FooterComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FooterComponent)
