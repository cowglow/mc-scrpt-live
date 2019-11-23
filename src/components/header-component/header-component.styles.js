import withStyles from "@material-ui/core/styles/withStyles";

export default withStyles(theme => ({
  root: {
    ...theme.base.root,
    [theme.breakpoints.up('lg')]: {
      height: '60.5vh'
    },
    [theme.breakpoints.down('lg')]: {
      height: '100vh'
    },
    [theme.breakpoints.down('md')]: {
      height: '75vh'
    },
    [theme.breakpoints.down('xs')]: {
      height: '86vh'
    }
  },
  header: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12)
  },
  logo: {
    backgroundColor: theme.palette.common.black,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    width: "100%",
    minWidth: 126,
    maxWidth: 482
  }
}));
