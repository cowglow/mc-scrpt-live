import React from 'react';
import {storiesOf} from '@storybook/react';

import Contact from "./contact";
import {Content} from '../../../public/fixtures/data';

storiesOf('Components|Contact', module)
    .add('default', () => (<Contact data={Content.ContactText} email={Content.ContactEmail}/>)
    );
