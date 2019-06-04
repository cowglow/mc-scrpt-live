import React from 'react';
import {storiesOf} from "@storybook/react";

import Profile from "./profile";
import {Content} from '../../../public/fixtures/data';

storiesOf('Profile', module)
    .add('default', () => (<Profile data={Content.ProfileText}/>)
    );