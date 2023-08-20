import NavBar from "$components/Navigation/NavBar.svelte";
import type {Meta} from "@storybook/svelte";
import type {StorybookStory} from "../../app";

const meta = {
    title: "Components/Navigation",
    component: NavBar,
} satisfies Meta<NavBar>

export default meta

export const Primary:StorybookStory<typeof meta> = {}
