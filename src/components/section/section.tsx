import React from "react";
import Typography from "@material-ui/core/Typography";
import addStyling from "./section.styles";

interface SectionProps{
  children: any;
  classes: any;
  label: string;
}
const Section:React.FC<SectionProps> = ({ children, classes, label }) => {
  return (
    <section className={classes.root}>
      <Typography variant={"h5"} className={classes.header}>
        {label}
      </Typography>
      {children}
    </section>
  );
};

export default addStyling(Section);
