import React from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid'
import { Parallax } from 'react-parallax'
import logo from '../../../../web-app/static/images/logo-animation.gif'
import { logoAlt } from '../../../../web-app/src/data/content.json'
import { backgroundImage } from '../../lib/background-image'
import addStyling from './header-component.styles'

const randomImage = backgroundImage(2)

interface HeaderComponentProps {
  classes:any;
}

const HeaderComponent:React.FC<HeaderComponentProps> = ({ classes }) => {
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

export default addStyling(HeaderComponent);
