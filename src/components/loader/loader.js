import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";
import Typography from "@material-ui/core/Typography";
import addStyles from "./loader.styles";

const Loader = ({ classes, isLoading }) => {
  return isLoading === false ? (
    <div className={classes.root}>
      <Typography variant={'h4'} className={classes.marquee}>
        <Typist>loading...</Typist>
      </Typography>
    </div>
  ) : null;
};

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default addStyles(Loader);