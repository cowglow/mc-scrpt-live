import React from "react";
import {storiesOf} from "@storybook/react";

import {default as App} from "./app";

storiesOf("Web App|RootComponent", module).add("default", () => <App/>);
