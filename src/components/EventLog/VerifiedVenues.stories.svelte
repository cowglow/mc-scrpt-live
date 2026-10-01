<script module lang="ts">
	import { defineMeta } from "@storybook/addon-svelte-csf";
	import { expect, within } from "storybook/test";
	import LogEntry from "./LogEntry.svelte";
	import { verifiedVenues, type VerifiedVenue } from "$lib/verify-venue";

	const recognizedVenues = Object.keys(verifiedVenues) as VerifiedVenue[];

	// Real venue names from the event data that are not in the verified list,
	// plus a casing variant to show matching is exact
	const unrecognizedVenues = [
		"Orbeat",
		"JUZ Eckental",
		"Stellwerk 1",
		"Kuni Island Bar",
		"Z-bau"
	] as const;

	type Venue = VerifiedVenue | (typeof unrecognizedVenues)[number];

	const toEntry = (venue: Venue, i: number) => ({
		name: `Show ${i + 1}`,
		date: new Date("2026-06-15T20:00:00.000Z"),
		venue,
		link: "https://facebook.com/events/123456789"
	});

	const { Story } = defineMeta({
		title: "Components/EventLog/Verified Venues",
		component: LogEntry,
		parameters: { layout: "fullview" }
	});
</script>

<Story
	name="Recognized Venues"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		for (const venue of recognizedVenues) {
			const link = canvas.getByRole("link", { name: `View ${venue} on Google Maps` });
			await expect(link).toHaveAttribute("href", verifiedVenues[venue]);
		}
	}}
>
	{#snippet template()}
		{#each recognizedVenues as venue, i (venue)}
			<LogEntry {...toEntry(venue, i)} />
		{/each}
	{/snippet}
</Story>

<Story
	name="Unrecognized Venues"
	play={async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		for (const venue of unrecognizedVenues) {
			await expect(canvas.getByText(venue)).toBeInTheDocument();
			await expect(canvas.queryByRole("link", { name: `View ${venue} on Google Maps` })).toBeNull();
		}
	}}
>
	{#snippet template()}
		{#each unrecognizedVenues as venue, i (venue)}
			<LogEntry {...toEntry(venue, i)} />
		{/each}
	{/snippet}
</Story>
