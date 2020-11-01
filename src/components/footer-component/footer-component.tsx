import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SocialMedia from "../social-media/social-media";
import addStyling from "./footer-component.styles";

interface FooterComponentProps {
  classes: any;
}
const FooterComponent:React.FC<FooterComponentProps> = ({ classes }) => {
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

export default addStyling(FooterComponent);
