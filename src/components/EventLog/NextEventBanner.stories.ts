import NextEventBanner from "$components/EventLog/NextEventBanner.svelte";
import type {Meta} from "@storybook/svelte";
import type {StorybookStory} from "../../app";
import upcomingEvents from "../../data/upcoming-shows.json"

const meta ={
    title: "Components/Event Log/Next Event Banner",
    component: NextEventBanner,
    argTypes:{
        data:{
            control:"object"
        }
    }
} satisfies Meta<NextEventBanner>

export default meta

export const Primary: StorybookStory<typeof meta> = {
    args: {
        data: upcomingEvents
    }
}