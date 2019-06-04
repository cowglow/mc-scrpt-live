import {addDecorator, addParameters, configure} from "@storybook/react";
// import {withKnobs} from "@storybook/addon-knobs";

const req = require.context('../src/components', true, /\.stories\.js$/);

// Decorators

// Option defaults:
addParameters({
    options: {
        showPanel: true
    },
});


configure(() => {
    req.keys().forEach(filename => req(filename));
}, module);