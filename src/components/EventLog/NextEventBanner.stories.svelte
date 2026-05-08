<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import NextEventBanner from "./NextEventBanner.svelte";

	const showA = {
		name: "Sound Journey Vol. 4",
		date: new Date("2027-03-15T22:00:00"),
		venue: "Z-Bau",
		link: "https://facebook.com/events/123456789"
	};

	const showB = {
		name: "Open Air Festival",
		date: new Date("2027-04-20T20:00:00"),
		venue: "Stadtpark Nürnberg",
		link: "https://facebook.com/events/987654321"
	};

	const { Story } = defineMeta({
		title: "Components/EventLog/NextEventBanner",
		component: NextEventBanner,
		tags: ["autodocs"]
	});
</script>

<Story
	name="Single Event"
	args={{
		data: [showA],
		screenWidth: 1024
	}}
/>

<Story
	name="Multiple Events"
	args={{
		data: [showA, showB],
		screenWidth: 1024
	}}
/>

<Story
	name="Mobile View"
	args={{
		data: [showA],
		screenWidth: 375
	}}
/>
