import React from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";

const SocialMediaLink = ({ children, className, label, url }) => {
  const goTo = url => {
    window.open(url);
  };
  return (
    <IconButton
      className={className}
      aria-label={label}
      onClick={() => goTo(url)}
    >
      {children}
    </IconButton>
  );
};

SocialMediaLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default SocialMediaLink;
