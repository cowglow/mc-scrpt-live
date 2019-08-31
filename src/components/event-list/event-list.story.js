import React from 'react';
import {storiesOf} from '@storybook/react';

import EventList from "./event-list";
import {EventData} from '../../assets/content-data';

storiesOf('Components|Event List', module)
    .add('default', () => (<EventList bind={EventData}/>)
    );
