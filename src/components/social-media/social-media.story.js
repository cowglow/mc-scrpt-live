import React from 'react';
import {storiesOf} from "@storybook/react";

import SocialMedia from "./social-media";
import {SocialMediaData} from '../../assets/content-data';

import classes from '../app/app.styles.css';

storiesOf('Components|Social Media', module)
    .add('default', () => (<footer><SocialMedia className={classes.SocialMedia} bind={SocialMediaData}/></footer>)
    );
