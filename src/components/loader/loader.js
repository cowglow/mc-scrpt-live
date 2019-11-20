import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { Typography } from '@material-ui/core'
import Typist from 'react-typist'

const styles = theme => ({
  root: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.black,
    position: 'fixed',
    width: '100%',
    height: '100vh',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999
  }
});

const Loader = ({ classes, isLoading }) => {
  return isLoading === true ? (
    <div className={classes.root}>
      <Typography variant={'h4'}>
        <Typist>
          loading...
        </Typist>
      </Typography>
    </div>
  ) : null;
};

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default withStyles(styles)(Loader)
