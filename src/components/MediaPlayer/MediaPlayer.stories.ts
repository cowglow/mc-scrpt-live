import type {Meta} from "@storybook/svelte";
import MediaPlayer from "$components/MediaPlayer/MediaPlayer.svelte";
import type {StorybookStory} from "../../app";

const meta = {
    title: "Components/Media Player",
    components: MediaPlayer,
    argTypes: {
        consent: {
            control: "boolean"
        }
    }
} satisfies Meta<MediaPlayer>

export default meta

export const Primary: StorybookStory<typeof meta> = {
    args: {
        consent: true
    }
}