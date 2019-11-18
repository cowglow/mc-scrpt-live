import React from "react";
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {},
  link: {
    color: theme.palette.primary.main
  }
});

const Contact = ({ classes, label, link, text }) => {
  return (
    <Typography variant={'body1'}>
      {text}{' '}
      <a href={link} target="_twitter" className={classes.link}>
        {label}
      </a>
    </Typography>
  );
};

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default withStyles(styles)(Contact)
