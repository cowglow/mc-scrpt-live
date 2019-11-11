import React from "react";
import PropType from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { logoAlt } from '../../data/content'
import { backgroundImage } from '../../lib/background-image'
import logo from '../../images/logo-animation.gif'

const styles = theme => ({
  root: {
    ...theme.base.root,
    border: 'thin solid red',
    backgroundImage: backgroundImage(2)
  }
})

const HeaderComponent = ({ classes }) => {
  return (
    <header className={classes.root}>
      <img src={logo} className="Header-Content__Logo" alt={logoAlt}/>
    </header>
  )
};

HeaderComponent.propTypes = {
  classes: PropType.object.isRequired
}

export default withStyles(styles)(HeaderComponent)
