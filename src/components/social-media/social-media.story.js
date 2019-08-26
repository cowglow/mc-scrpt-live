import React from 'react';
import {storiesOf} from "@storybook/react";

import SocialMedia from "./social-media";
import ContentData from '../../services/contentData';

import '../app/app.styles.css';

storiesOf('Components|Social Media', module)
    .add('default', () => (<footer><SocialMedia className={SocialMedia} bind={ContentData.SocialMediaData}/></footer>)
    );
