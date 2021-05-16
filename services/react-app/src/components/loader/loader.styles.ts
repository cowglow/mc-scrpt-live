import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles(theme => ({
  root: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.common.black,
    position: "fixed",
    width: "100%",
    height: "100vh",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999
  },
  marquee: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  }
}));
