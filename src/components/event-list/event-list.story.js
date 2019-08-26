import React from 'react';
import {storiesOf} from '@storybook/react';

import EventList from "./event-list";
import {EventData} from '../../services/contentData';

storiesOf('Components|Event List', module)
    .add('default', () => (<EventList bind={EventData}/>)
    );
