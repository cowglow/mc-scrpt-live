import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles(theme => ({
  tabs: {
    border: "thin solid " + theme.palette.primary.main,
    marginBottom: theme.spacing(2)
  },
  tab: {
    fontSize: 10
  },
  list: {
    color: theme.palette.primary.main,
    position: "relative",
    overflow: "auto",
    [theme.breakpoints.up("md")]: {
      maxHeight: 187
    },
    [theme.breakpoints.up("sm")]: {
      maxHeight: 420
    }
  },
  listItem: {
    color: theme.palette.primary.main
  },
  link: {
    color: theme.palette.primary.main
  }
}));
