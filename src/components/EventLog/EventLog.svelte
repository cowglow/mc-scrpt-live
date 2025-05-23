<script lang="ts">
	import { derived, readable, writable } from "svelte/store";
	import LogController from "./LogController.svelte";
	import NextEventBanner from "./NextEventBanner.svelte";
	import {
		EVENT_CONTENT_DEFAULT_PAGE,
		EVENT_CONTENT_MAX_PER_PAGE,
		EVENT_LOCALSTORAGE_KEY,
		JSON_PATH
	} from "$lib/constants";
	import { dataLoader } from "$lib/data-loader";
	import { paginateContent } from "$lib/paginate-content";
	import translations from "$stores/i18n-store";
	import { validUpcomingShows } from "$lib/valid-upcoming-shows";
	import { innerWidth } from "svelte/reactivity/window";
	import LogEntry from "$components/EventLog/LogEntry.svelte";

	$: label = $translations["events.header.title"];
	$: content = $translations["events.header.description"];

	export let upcomingShows = [];
	export let previousShows = [];

	let spawned = writable(true);

	let shows = writable(previousShows);
	let currentPage = writable(EVENT_CONTENT_DEFAULT_PAGE);
	let maxPerPage = readable(EVENT_CONTENT_MAX_PER_PAGE);
	let eventsStore = derived([shows, currentPage, maxPerPage], paginateContent);

	const disableBanner = validUpcomingShows(upcomingShows);

	function stepBackward() {
		$currentPage--;
	}

	async function stepForward() {
		if ($spawned) {
			$shows = await dataLoader(JSON_PATH, EVENT_LOCALSTORAGE_KEY);
			$spawned = false;
		}
		$currentPage++;
	}
</script>

{#if disableBanner}
	<NextEventBanner data={upcomingShows} screenWidth={innerWidth.current} />
{/if}
<h1>{label}</h1>
<h3>{content}</h3>
<div class="wrapper">
	{#if $eventsStore.shows.length > 0}
		<div class="event-log">
			{#each $eventsStore.shows as event}
				<LogEntry {...event} />
			{/each}
		</div>
	{:else}
		<p>{translations["events.noEvents"]}</p>
	{/if}
	<LogController
		{...{
			stepBackwardDisabled: !$eventsStore.previousPage,
			stepForwardDisabled: !$eventsStore.nextPage,
			stepForward,
			stepBackward
		}}
	/>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1080px;
		padding: 0 var(--side-padding) var(--bottom-padding);
		margin: 0 auto;
	}

	h1 {
		font-family: Teko, sans-serif;
		font-size: 3.8rem;
		text-align: left;
		left: 0;
		margin: var(--side-padding) 0 0;
		padding: 0;
	}

	h3 {
		font-size: 1.2rem;
		font-style: normal;
		font-weight: normal;
		text-align: left;
	}

	@media screen and (min-width: 700px) {
		h1 {
			text-align: center;
		}

		h3 {
			font-size: 1.8rem;
			text-align: center;
			padding: 0 13%;
		}
	}
</style>
