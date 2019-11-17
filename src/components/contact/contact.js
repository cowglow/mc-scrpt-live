import React from "react";
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {},
  link: {
    color: theme.palette.primary.main
  }
})

const Contact = ({ classes, label, link, text }) => {
  return (
    <p className="text-justify">
      {text}{' '}
      <a href={link} target="_twitter" className={classes.link}>
        {label}
      </a>
    </p>
  )
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default withStyles(styles)(Contact)
