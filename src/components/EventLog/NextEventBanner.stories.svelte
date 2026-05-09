<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import NextEventBanner from "./NextEventBanner.svelte";

	const showFarAway = {
		name: "Sound Journey Vol. 4",
		date: new Date(Date.now() + 118 * 24 * 60 * 60 * 1000),
		venue: "Z-Bau",
		link: "https://facebook.com/events/123456789"
	};

	const showSoon = {
		name: "Open Air Festival",
		date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
		venue: "Stadtpark Nürnberg",
		link: "https://facebook.com/events/987654321"
	};

	const showToday = {
		name: "Warehouse Sessions",
		date: new Date(Date.now() + 3 * 60 * 60 * 1000),
		venue: "Kunstwerk",
		link: "https://facebook.com/events/111222333"
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
		data: [showFarAway],
		screenWidth: 1024
	}}
/>

<Story
	name="Multiple Events"
	args={{
		data: [
			{ ...showSoon, date: new Date(Date.now() + 13 * 24 * 60 * 60 * 1000) },
			{ ...showFarAway, date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000) }
		],
		screenWidth: 1024
	}}
/>

<Story
	name="Same Day"
	args={{
		data: [showToday],
		screenWidth: 1024
	}}
/>

<Story
	name="Mobile View"
	args={{
		data: [showFarAway],
		screenWidth: 375
	}}
/>
