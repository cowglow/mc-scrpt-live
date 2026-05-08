<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import LogController from "./LogController.svelte";

	const { Story } = defineMeta({
		title: "Components/EventLog/LogController",
		component: LogController,
		tags: ["autodocs"],
		argTypes: {
			stepBackwardDisabled: { control: "boolean" },
			stepForwardDisabled: { control: "boolean" }
		}
	});
</script>

<Story
	name="First Page"
	args={{
		stepBackwardDisabled: true,
		stepForwardDisabled: false,
		stepBackward: () => {},
		stepForward: () => {}
	}}
/>

<Story
	name="Middle Page"
	args={{
		stepBackwardDisabled: false,
		stepForwardDisabled: false,
		stepBackward: () => {},
		stepForward: () => {}
	}}
/>

<Story
	name="Last Page"
	args={{
		stepBackwardDisabled: false,
		stepForwardDisabled: true,
		stepBackward: () => {},
		stepForward: () => {}
	}}
/>
