import React from 'react';
import {storiesOf} from "@storybook/react";

import SocialMedia from "./social-media";
import {SocialMediaData} from '../../../public/fixtures/data';

storiesOf('Social Media', module)
    .addParameters({
        options: {
            showPanel: false
        }
    })
    .add('default', () => (<SocialMedia data={SocialMediaData}/>)
    );