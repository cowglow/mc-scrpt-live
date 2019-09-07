import React from "react";
import {storiesOf} from "@storybook/react";

import Contact from "./contact";
import {ContactData} from "../../assets/content-data";

storiesOf("Components|Contact", module).add("default", () => (
    <Contact
        classname="SectionBody"
        label={ContactData.label}
        link={ContactData.link}
        text={ContactData.text}
    />
));
