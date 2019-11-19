import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import SocialMedia from "../social-media/social-media";

const styles = theme => ({
  root: {
    color: theme.palette.light.main
    // [theme.breakpoints.up('md')]: {
    //   padding: theme.spacing(6)
    // },
    //
    // [theme.breakpoints.only('md')]: {
    //   padding: theme.spacing(4)
    // },
    // [theme.breakpoints.only('sm')]: {
    //   padding: theme.spacing(1)
    // }
  },
  footer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(6),
    backgroundColor: theme.palette.background.default
  },
  footerText: {
    lineSpace: 1,
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      fontSize: 16
    }
  },
  copyrightText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 12
    }
  }
});

const FooterComponent = ({ classes }) => {
  return (
    <Grid className={classes.footer}>
      <footer className={classes.root}>
        <Container maxWidth="lg">
          <SocialMedia />
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            className={classes.footerText}
          >
            Philip Saa aka MC SCRPT
          </Typography>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            className={classes.copyrightText}
          >
            All Rights Reserved. &copy; {new Date().getFullYear()}
          </Typography>
        </Container>
      </footer>
    </Grid>
  );
};

FooterComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FooterComponent);
