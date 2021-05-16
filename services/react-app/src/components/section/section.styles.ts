import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(2),
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%"
  },
  header: {
    display: "inline-block",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.light,
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up("lg")]: {
      height: 108
    }
  }
}));
