import React from 'react'
import PropTypes from 'prop-types'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core'

import SocialMedia from '../social-media/social-media'

const styles = theme => ({
  root: {
    border: 'thin solid red',
    color: theme.palette.light.main
  }
});

const FooterComponent = ({ classes }) => {
  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <Typography variant="h5" align="center" gutterBottom>
          Philip Saa aka MC SCRPT
        </Typography>
        <SocialMedia/>
        <Typography variant="h6" align="center" gutterBottom>
          All Rights Reserved. &copy; {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  );
};

FooterComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FooterComponent)
