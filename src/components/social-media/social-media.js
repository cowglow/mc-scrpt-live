import React from "react";
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core'

import data from '../../data/social-media'

import TwitterIcon from './icons/twitter-icon'
import SoundcloudIcon from './icons/soundcloud-icon'
import MixcloudIcon from './icons/mixcloud-icon'
import InstagramIcon from './icons/instagram-icon'

const styles = theme => ({
  root: {
    border: 'thin solid red',
    display: 'flex',
    textAlign: 'center'
  },
  icon: {
    border: 'thin solid green',
    fill: theme.palette.primary.main,
    width: theme.spacing(12),
    height: theme.spacing(12),
    '&:hover': {
      fill: theme.palette.secondary.main
    }
  }
});

const SocialMediaLink = ({ children, className, label, url }) => {
  const goTo = url => {
    // window.open(url);
    console.log(url)
  }

  return (
    <IconButton
      className={className}
      aria-label={label}
      onClick={() => goTo(url)}
    >
      {children}
    </IconButton>
  )
}

SocialMediaLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

const SocialMedia = ({ classes }) => {
  return (
    <Grid
      container
      className={classes.root}
      onClick={event => console.log(event.currentTarget)}
    >
      {data.map((platform, index) => (
        <Grid key={index} item xm={12} sm={3}>
          {
            {
              Twitter: (
                <SocialMediaLink
                  className={classes.icon}
                  label={platform.name}
                  url={platform.url}
                >
                  <TwitterIcon color={'primary'}/>
                </SocialMediaLink>
              ),
              SoundCloud: (
                <SocialMediaLink
                  className={classes.icon}
                  label={platform.name}
                  url={platform.url}
                >
                  <SoundcloudIcon/>
                </SocialMediaLink>
              ),
              MixCloud: (
                <SocialMediaLink
                  className={classes.icon}
                  label={platform.name}
                  url={platform.url}
                >
                  <MixcloudIcon/>
                </SocialMediaLink>
              ),
              Instagram: (
                <SocialMediaLink
                  className={classes.icon}
                  label={platform.name}
                  url={platform.url}
                >
                  <InstagramIcon/>
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

export default withStyles(styles)(SocialMedia)
