import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";

import data from "../../data/social-media";

import TwitterIcon from "./icons/twitter-icon";
import SoundcloudIcon from "./icons/soundcloud-icon";
import MixcloudIcon from "./icons/mixcloud-icon";
import InstagramIcon from "./icons/instagram-icon";

const styles = theme => ({
  root: {
    textAlign: "center",
    padding: theme.spacing(1)
  },
  icon: {
    fill: theme.palette.primary.main,
    width: theme.spacing(12),
    height: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(10),
      height: theme.spacing(10)
    },
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(6),
      height: theme.spacing(6)
    }
  }
});

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

const SocialMedia = ({ classes }) => {
  return (
    <Grid
      container
      justify={"center"}
      className={classes.root}
      onClick={event => console.log(event.currentTarget)}
    >
      {data.map((platform, index) => (
        <Grid key={index} item>
          {
            {
              Twitter: (
                <SocialMediaLink
                  className={classes.icon}
                  label={platform.name}
                  url={platform.url}
                >
                  <TwitterIcon color={"primary"} />
                </SocialMediaLink>
              ),
              SoundCloud: (
                <SocialMediaLink
                  className={classes.icon}
                  label={platform.name}
                  url={platform.url}
                >
                  <SoundcloudIcon />
                </SocialMediaLink>
              ),
              MixCloud: (
                <SocialMediaLink
                  className={classes.icon}
                  label={platform.name}
                  url={platform.url}
                >
                  <MixcloudIcon />
                </SocialMediaLink>
              ),
              Instagram: (
                <SocialMediaLink
                  className={classes.icon}
                  label={platform.name}
                  url={platform.url}
                >
                  <InstagramIcon />
                </SocialMediaLink>
              )
            }[platform.name]
          }
        </Grid>
      ))}
    </Grid>
  );
};

SocialMedia.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SocialMedia);
