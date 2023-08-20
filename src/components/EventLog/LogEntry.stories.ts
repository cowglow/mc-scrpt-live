import LogEntry from "$components/EventLog/LogEntry.svelte";
import type {Meta} from "@storybook/svelte";
import type {StorybookStory} from "../../app";

const meta = {
    title: "Components/Event Log/Log Entry",
    component: LogEntry,
    argTypes: {
        name: {
            control: "text"
        },
        date: {
            control: "date"
        },
        venue: {
            control: "text"
        },
        link: {
            control: "text"
        }
    }
} satisfies Meta<LogEntry>

export default meta

export const Primary: StorybookStory<typeof meta> = {
    args: {
        name: "Event Name",
        date: new Date(),
        venue: "Venue Name",
        link: "https://events.facebook.com"
    }
}