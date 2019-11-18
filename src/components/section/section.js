import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  },
  header: {
    display: 'inline-block',
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.light.main,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up('lg')]: {
      height: 108
    }
  }
});

const Section = ({ children, classes, headerLabel }) => {
  return (
    <section className={classes.root}>
      <Typography variant={'h5'} className={classes.header}>
        {headerLabel}
      </Typography>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  // headerLabel: PropTypes.style
};

export default withStyles(styles)(Section)
