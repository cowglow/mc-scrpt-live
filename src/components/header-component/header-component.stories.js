import React from 'react';
import {storiesOf} from '@storybook/react';
import HeaderComponent from "./header-component";

storiesOf('Header', module)
    .add('default', () => (<HeaderComponent/>)
    );