import React from "react";
import Grid from "@material-ui/core/Grid";
import SocialMediaLink from "./social-media-link";
import TwitterIcon from "./icons/twitter-icon";
import SoundcloudIcon from "./icons/soundcloud-icon";
import MixcloudIcon from "./icons/mixcloud-icon";
import InstagramIcon from "./icons/instagram-icon";
import data from "../../data/social-media.json";
import addStyling from "./social-media.styles";

interface SocialMediaProps {
  classes: any;
}

const SocialMedia:React.FC<SocialMediaProps> = ({ classes }) => {
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
                  <TwitterIcon />
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

export default addStyling(SocialMedia);
