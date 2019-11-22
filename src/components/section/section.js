import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import addStyling from "./section.styles";

const Section = ({ children, classes, label }) => {
  return (
    <section className={classes.root}>
      <Typography variant={"h5"} className={classes.header}>
        {label}
      </Typography>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  label: PropTypes.string
};

export default addStyling(Section);
