import Footer from "$components/Layout/Footer.svelte";
import type {Meta} from "@storybook/svelte";
import type {StorybookStory} from "../../app";

const meta = {
    title: "Layout/Footer",
    component: Footer,
} satisfies Meta<Footer>

export default meta

export const Primary:StorybookStory<typeof meta> = {

}
