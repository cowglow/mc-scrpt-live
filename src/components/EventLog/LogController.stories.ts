import LogController from "$components/EventLog/LogController.svelte";
import type {Meta} from "@storybook/svelte";
import type {StorybookStory} from "../../app";

const meta = {
    title: "Components/Event Log/Log Controller",
    component: LogController,
    parameters: { actions: { argTypesRegex: '^step.*' } },
    argTypes: {
        stepForward: {
            action: "Step Forward"
        },
        stepBackward: {
            action: "Step Backward"
        },
        stepBackwardDisabled: {
            control: "boolean"
        },
        stepForwardDisabled: {
            control: "boolean"
        },
    }
} satisfies Meta<LogController>

export default meta

export const Primary:StorybookStory<typeof meta> = {
    args: {
        stepBackwardDisabled:false,
        stepForwardDisabled:false
    }
}
