<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import EventLog from "./EventLog.svelte";

	const upcoming = [
		{
			name: "Sound Journey Vol. 4",
			date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
			venue: "Z-Bau",
			link: "https://facebook.com/events/123456789"
		},
		{
			name: "Open Air Festival",
			date: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString(),
			venue: "Stadtpark Nürnberg",
			link: "https://facebook.com/events/987654321"
		}
	];

	const previous = [
		{
			name: "Monsters of Jungle feat. Jam Thieves",
			date: "2026-04-15T20:00:00.000Z",
			venue: "Z-Bau",
			link: "https://facebook.com/events/111222333"
		},
		{
			name: "DubWorXx feat. Kara",
			date: "2026-03-20T21:00:00.000Z",
			venue: "Roter Salon",
			link: "https://facebook.com/events/444555666"
		},
		{
			name: "Booyaka - Jungle & Drum and Bass",
			date: "2026-02-10T21:00:00.000Z",
			venue: "Kofferfabrik",
			link: ""
		}
	];

	const { Story } = defineMeta({
		title: "Components/EventLog/EventLog",
		component: EventLog,
		tags: ["autodocs"],
		parameters: { layout: "fullscreen" }
	});
</script>

<Story
	name="With Upcoming Shows"
	args={{ upcomingShows: upcoming, previousShows: previous }}
/>

<Story
	name="No Upcoming Shows"
	args={{ upcomingShows: [], previousShows: previous }}
/>

<Story
	name="Empty"
	args={{ upcomingShows: [], previousShows: [] }}
/>