import React from 'react';
import {storiesOf} from '@storybook/react';
import HeaderComponent from "./header-component";

storiesOf('Components|Header', module)
    .add('default', () => (<HeaderComponent/>)
    );
