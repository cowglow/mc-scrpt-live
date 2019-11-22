import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles(theme => ({
  main: {
    backgroundColor: theme.palette.background.paper
  },
  link: {
    color: theme.palette.primary.main
  }
}));
