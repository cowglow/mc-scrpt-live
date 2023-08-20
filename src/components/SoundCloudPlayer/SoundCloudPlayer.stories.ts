import SoundCloudPlayer from "$components/SoundCloudPlayer/SoundCloudPlayer.svelte";
import type {Meta} from "@storybook/svelte";
import type {StorybookStory} from "../../app";

const meta = {
    title: "Components/SoundCloud Player",
    component: SoundCloudPlayer,
    argTypes: {
        consent: {
            control: 'boolean'
        }
    }
} satisfies Meta<SoundCloudPlayer>

export default meta

export const Primary: StorybookStory<typeof meta> = {
}