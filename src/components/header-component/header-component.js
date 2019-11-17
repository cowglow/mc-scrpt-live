import React from "react";
import PropType from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import logo from '../../images/logo-animation.gif'
import { logoAlt } from '../../data/content'

const styles = theme => ({
  root: theme.base.root,
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
    <header className={classes.root}>
      <img src={logo} className={classes.image} alt={logoAlt}/>
    </header>
  );
};

HeaderComponent.propTypes = {
  classes: PropType.object.isRequired
};

export default withStyles(styles)(HeaderComponent)
