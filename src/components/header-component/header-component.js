import React from "react";
import PropType from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import withStyles from '@material-ui/core/styles/withStyles'

import logo from '../../images/logo-animation.gif'
import { logoAlt } from '../../data/content'
import { backgroundImage } from '../../lib/background-image'

const styles = theme => ({
  root: theme.base.root,
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
  image: {
    backgroundColor: theme.palette.common.black,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    width: '100%',
    minWidth: 126,
    maxWidth: 482
  }
});

const HeaderComponent = ({ classes }) => {
  return (
    <Grid className={classes.header}>
      <Container>
        <header className={classes.root}>
          <img src={logo} className={classes.image} alt={logoAlt}/>
        </header>
      </Container>
    </Grid>
  );
};

HeaderComponent.propTypes = {
  classes: PropType.object.isRequired
};

export default withStyles(styles)(HeaderComponent)
