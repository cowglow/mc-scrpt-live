import SectionLabel from "$components/Layout/SectionLabel.svelte";
import type {Meta} from "@storybook/svelte";

const meta = {
    title: "Layout/Section Label",
    component: SectionLabel,
    parameters: {
        background: {
            color: "#eeffee"
        }
    },
    argTypes: {
        title: {
            control: "string"
        },
        description: {Ø
            control: "string",
        }
    }
} satisfies Meta<SectionLabel>

export default meta

const Template = ({...args}) => ({
    Component: SectionLabel, props: args
})

export const Primary = Template.bind({});
Primary.args = {
    title: 'Section Title',
    description: "Description"
}