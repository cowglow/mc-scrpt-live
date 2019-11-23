import React from "react";
import PropType from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Parallax } from 'react-parallax'
import logo from "../../images/logo-animation.gif";
import { logoAlt } from "../../data/content";
import { backgroundImage } from '../../lib/background-image'
import addStyling from "./header-component.styles";

const randomImage = backgroundImage(2)

const HeaderComponent = ({ classes }) => {
  return (
    <React.Fragment>
      <Parallax bgImage={randomImage} strength={500}>
        <Grid className={classes.root}>
          <Container>
            <header className={classes.header}>
              <img src={logo} className={classes.logo} alt={logoAlt}/>
            </header>
          </Container>{' '}
        </Grid>
      </Parallax>
    </React.Fragment>
  );
};

HeaderComponent.propTypes = {
  classes: PropType.object.isRequired
};

export default addStyling(HeaderComponent);
