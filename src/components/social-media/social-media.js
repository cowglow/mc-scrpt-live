import React from "react";
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/IconButton'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core'

import SocialMediaData from '../../data/social-media'

import TwitterIcon from './icons/twitter-icon'
import SoundcloudIcon from './icons/soundcloud-icon'
import MixcloudIcon from './icons/mixcloud-icon'
import InstagramIcon from './icons/instagram-icon'

const styles = theme => ({
  root: {
    color: 'red',
    // backgroundColor: "red",
    '& > svg': {
      margin: theme.spacing(2)
    }
  },
  iconHover: {},
  icon: {
    fill: theme.palette.primary.main,
    width: 512,
    height: 512,
    '&:hover': {
      color: theme.palette.secondary.main
    }
  }
})

const SocialMedia = ({ classes }) => {
  return (
    <Grid
      container
      direciton="row"
      justify="space-between"
      alignItems="stretch"
      className={classes.root}
    >
      {SocialMediaData.map((platform, index) => (
        <Grid key={index} item sm={3}>
          {/*<a href={platform.url} target="_blank">*/}
            {
              {
                Twitter: (
                  <IconButton
                    className={classes.icon}
                    aria-label={platform.name}
                  >
                    <TwitterIcon/>
                  </IconButton>
                ),
                SoundCloud: (
                  <IconButton
                    className={classes.icon}
                    aria-label={platform.name}
                  >
                    <SoundcloudIcon/>
                  </IconButton>
                ),
                MixCloud: (
                  <IconButton
                    className={classes.icon}
                    aria-label={platform.name}
                  >
                    <MixcloudIcon/>
                  </IconButton>
                ),
                Instagram: (
                  <IconButton
                    className={classes.icon}
                    aria-label={platform.name}
                  >
                    <InstagramIcon/>
                  </IconButton>
                )
              }[platform.name]
            }
          {/*</a>*/}
        </Grid>
      ))}
    </Grid>
  );

  // return (
  //   <ul>
  //     {SocialMediaData.map((platform, index) => (
  //       <li key={index}>
  //         <a href={platform.url} target="_blank">
  //           {
  //             {
  //               Twitter: <span className={[classes.icon, classes.twitter].join(' ')} />
  //               // Twitter: <span className="icon twitter" />,
  //               // SoundCloud: <span className="icon soundCloud" />,
  //               // MixCloud: <span className="icon mixCloud" />,
  //               // Instagram: <span className="icon instagram" />
  //             }[platform.name]
  //           }
  //         </a>
  //       </li>
  //     ))}
  //   </ul>
  // );
};

SocialMedia.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SocialMedia)
