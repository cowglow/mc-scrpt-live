import LogList from "$components/EventLog/LogList.svelte";
import type {Meta} from "@storybook/svelte";
import type {StorybookStory} from "../../app";
import previousEvent from "../../data/previous-shows.json"

const meta = {
    title: "Components/Event Log/Log List",
    component: LogList,
    argTypes: {
        data: "object"
    }
} satisfies Meta<LogList>;

export default meta

export const Primary: StorybookStory<typeof meta> = {
    args: {
        data: previousEvent
    }
}
