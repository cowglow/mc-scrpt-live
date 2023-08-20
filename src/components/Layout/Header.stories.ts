import Header from "$components/Layout/Header.svelte";
import type {Meta} from "@storybook/svelte";
import type {StorybookStory} from "../../app";

const meta = {
    title: "Layout/Header",
    component: Header
} satisfies Meta<Header>

export default meta

export const Primary:StorybookStory<typeof meta> = {
    
}