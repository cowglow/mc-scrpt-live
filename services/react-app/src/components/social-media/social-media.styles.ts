import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles(theme => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(1)
  },
  icon: {
    fill: theme.palette.primary.main,
    width: theme.spacing(12),
    height: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(10),
      height: theme.spacing(10)
    },
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(6),
      height: theme.spacing(6)
    }
  }
}));
