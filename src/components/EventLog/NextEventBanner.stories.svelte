<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { expect } from "storybook/test";
	import NextEventBanner from "./NextEventBanner.svelte";
	import { SvelteDate } from "svelte/reactivity";
	import { verifiedVenues } from "$lib/verify-venue";

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

	// 23:30 UTC is already the next day in Germany (00:30 CET / 01:30 CEST),
	// while visitors in UTC or the Americas are still on the previous day.
	const showAfterMidnight = (() => {
		const date = new SvelteDate();
		date.setUTCDate(date.getUTCDate() + 7);
		date.setUTCHours(23, 30, 0, 0);
		return {
			name: "Afterhours",
			date,
			venue: "Kunstwerk",
			link: "https://facebook.com/events/444555666"
		};
	})();

	// An abbreviated venue name: a link built from the raw name ("maps/search/KV")
	// would not find the venue, so the banner must use the verified URL
	const showAbbreviatedVenue = {
		name: "Kunstverein Night",
		date: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
		venue: "KV",
		link: "https://facebook.com/events/777888999"
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

<Story
	name="Show After Midnight (German Time)"
	args={{
		data: [showAfterMidnight],
		screenWidth: 1024
	}}
	play={async ({ canvasElement }) => {
		// The storybook test browser runs as a New York visitor (see vite.config.ts),
		// where this show is still on the previous day
		const germanDay = new Date(showAfterMidnight.date.getTime() + 24 * 60 * 60 * 1000).getUTCDate();
		const visitorDay = showAfterMidnight.date.getUTCDate();
		const dateText = canvasElement.querySelector(".title h2 span")?.textContent ?? "";

		await expect(dateText).toMatch(new RegExp(`\\b${String(germanDay).padStart(2, "0")}\\b`));
		await expect(dateText).not.toMatch(new RegExp(`\\b${String(visitorDay).padStart(2, "0")}\\b`));

		// The calendar download must hold the same moment in time, written in UTC
		const icsHref = canvasElement.querySelector(".info a[download]")?.getAttribute("href") ?? "";
		const ics = decodeURIComponent(icsHref.replace("data:text/calendar;charset=utf-8,", ""));
		const [, y, mo, d, h, mi, s] =
			ics.match(/DTSTART:(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z/) ?? [];

		await expect(new Date(Date.UTC(+y, +mo - 1, +d, +h, +mi, +s)).getTime()).toBe(
			showAfterMidnight.date.getTime()
		);
	}}
/>

<Story
	name="Abbreviated Venue"
	args={{
		data: [showAbbreviatedVenue],
		screenWidth: 1024
	}}
	play={async ({ canvasElement }) => {
		const mapLink = canvasElement.querySelector('.info a[target="map-link"]');

		await expect(mapLink).toHaveAttribute("href", verifiedVenues.KV);
	}}
/>
