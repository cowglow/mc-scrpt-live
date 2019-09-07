import React from "react";
import {storiesOf} from "@storybook/react";

import EventList from "./event-list";
import {Events} from "../../../public/fixtures/event-data";

storiesOf("Components|Event List", module)
    .add("default", () => <EventList bind={Events} mode="default"/>)
    .add("archive", () => <EventList bind={Events} mode="archive"/>);
