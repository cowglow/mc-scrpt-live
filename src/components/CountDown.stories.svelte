<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import CountDown from "./CountDown.svelte";

	const { Story } = defineMeta({
		title: "Components/CountDown",
		component: CountDown,
		tags: ["autodocs"],
		argTypes: {
			date: { control: "date" }
		}
	});
</script>

<Story
	name="Many Days Away"
	args={{
		date: new Date(Date.now() + 118 * 24 * 60 * 60 * 1000)
	}}
/>

<Story
	name="Single Digit Days"
	args={{
		date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
	}}
/>

<Story
	name="Same Day"
	args={{
		date: new Date(Date.now() + 3 * 60 * 60 * 1000)
	}}
/>
