import React from "react";
import PropType from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import logo from "../../images/logo-animation.gif";
import { logoAlt } from "../../data/content";
import addStyling from "./header-component.styles";

const HeaderComponent = ({ classes }) => {
  return (
    <Grid className={classes.header}>
      <Container>
        <header className={classes.root}>
          <img src={logo} className={classes.image} alt={logoAlt} />
        </header>
      </Container>
    </Grid>
  );
};

HeaderComponent.propTypes = {
  classes: PropType.object.isRequired
};

export default addStyling(HeaderComponent);
