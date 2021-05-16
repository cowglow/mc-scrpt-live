import React from "react";
import Typist from "react-typist";
import Typography from "@material-ui/core/Typography";
import addStyles from "./loader.styles";

interface LoaderProps {
  classes: any;
  isLoading: any;
}

const Loader:React.FC<LoaderProps> = ({ classes, isLoading }) => {
  return isLoading === false ? (
    <div className={classes.root}>
      <Typography variant={'h4'} className={classes.marquee}>
        <Typist>loading...</Typist>
      </Typography>
    </div>
  ) : null;
};

export default addStyles(Loader);