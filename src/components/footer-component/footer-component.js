import React from 'react'
import PropTypes from 'prop-types'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    border: 'thin solid red',
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    color: theme.palette.light.main
  }
})

const FooterComponent = ({ children, classes }) => {
  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        {children}
        <Typography variant="h5" align="center" gutterBottom>
          Philip Saa aka MC SCRPT
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          All Rights Reserved. &copy; {new Date().getFullYear()}
        </Typography>
      </Container>
    </footer>
  )
}

FooterComponent.propTypes = {
  children: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(FooterComponent)
