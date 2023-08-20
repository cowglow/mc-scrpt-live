import EventLog from "$components/EventLog/EventLog.svelte";
import type {Meta} from "@storybook/svelte";
import upcomingShows from "../../data/upcoming-shows.json"
import previousShows from "../../data/previous-shows.json"
import type {StorybookStory} from "../../app";

const meta = {
    title: "Components/Event Log",
    component: EventLog,
    argTypes: {
        disableBanner: {
            control: "boolean"
        },
        upcomingShows: {
            control: "object"
        },
        previousShows: {
            control: "object"
        }
    }
} satisfies Meta<EventLog>

export default meta

export const Primary: StorybookStory<typeof meta> = {
    args: {
        disableBanner: true,
        upcomingShows,
        previousShows
    }
}
