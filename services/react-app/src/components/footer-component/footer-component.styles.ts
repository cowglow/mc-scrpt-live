import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles(theme => ({
  root: {
    color: theme.palette.primary.light
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
}));
