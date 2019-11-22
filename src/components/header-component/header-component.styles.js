import withStyles from "@material-ui/core/styles/withStyles";
import { backgroundImage } from "../../lib/background-image";

export default withStyles(theme => ({
  root: theme.base.root,
  header: {
    background: backgroundImage(2),
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundColor: theme.palette.background.default,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.down("xs")]: {
      height: "100vh"
    },
    [theme.breakpoints.up("sm")]: {
      height: "60.5vh"
    }
  },
  image: {
    backgroundColor: theme.palette.common.black,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    width: "100%",
    minWidth: 126,
    maxWidth: 482
  }
}));
