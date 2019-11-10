import React from "react";

import "./social-media.css";
import SocialMediaData from '../../data/links'

const SocialMedia = () => {
  return (
    <ul>
      {SocialMediaData.map((platform, index) => (
        <li key={index}>
          <a href={platform.url} target="_blank">
            {
              {
                Twitter: <span className="icon twitter"/>,
                SoundCloud: <span className="icon soundCloud"/>,
                MixCloud: <span className="icon mixCloud"/>,
                Instagram: <span className="icon instagram"/>
              }[platform.name]
            }
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
