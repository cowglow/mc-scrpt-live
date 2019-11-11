import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    border: 'thin solid green',
    // backgroundColor: theme.palette.primary.main
    padding: theme.spacing(2),
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  header: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.light.main,
    backgroundColor: theme.palette.background.default
  }
})

const Section = ({ children, classes, headerLabel }) => {
  return (
    <section className={classes.root}>
      <Typography variant={'h5'} className={classes.header}>
        {headerLabel}
      </Typography>
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  headerLabel: PropTypes.style
}

export default withStyles(styles)(Section)
