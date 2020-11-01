import React from "react";
import IconButton from "@material-ui/core/IconButton";

interface SocialMediaLinkProps {
  children: any;
  className: any;
  label: any;
  url: any;
}
const SocialMediaLink:React.FC<SocialMediaLinkProps> = ({ children, className, label, url }) => {
  const goTo = (url:any) => {
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

export default SocialMediaLink;
