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

	$: eventLogTitle = $translations["events.header.title"];
	$: eventLogDescription = $translations["events.header.description"];

	export let upcomingShows = [];
	export let previousShows = [];

	let initialLoadPending = writable(true);

	let showsStore = writable(previousShows);
	let currentPage = writable(EVENT_CONTENT_DEFAULT_PAGE);
	let maxPerPage = readable(EVENT_CONTENT_MAX_PER_PAGE);
	let eventsStore = derived([showsStore, currentPage, maxPerPage], paginateContent);

	const hasUpcomingShows = validUpcomingShows(upcomingShows);

	function stepBackward() {
		$currentPage--;
	}

	async function stepForward() {
		if ($initialLoadPending) {
			$showsStore = await dataLoader(JSON_PATH, EVENT_LOCALSTORAGE_KEY);
			$initialLoadPending = false;
		}
		$currentPage++;
	}
</script>

{#if hasUpcomingShows}
	<NextEventBanner data={upcomingShows} screenWidth={innerWidth.current} />
{/if}
<div class="wrapper">
	<h2 class="p-name">{eventLogTitle}</h2>
	<p class="event-log-description">{eventLogDescription}</p>
	{#if $eventsStore.shows.length > 0}
		<div class="event-log h-feed">
			{#each $eventsStore.shows as event (event.date)}
				<LogEntry {...event} />
			{/each}
		</div>
	{:else}
		<p>{$translations["events.noEvents"]}</p>
	{/if}
	<LogController
		{...{
			stepBackwardDisabled: !$eventsStore.previousPage,
			stepForwardDisabled: !$eventsStore.nextPage,
			stepForward,
			stepBackward
		}}
	/>
	<a class="all-events-link" href="/event-log">{$translations["events.all.cta"]}</a>
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

	h2 {
		font-family: var(--font-heading), sans-serif;
		font-size: 2.4rem;
		text-align: left;
		margin: var(--side-padding) 0 0;
		padding: 0 var(--side-padding);
	}

	.event-log-description {
		font-size: 1.2rem;
		font-style: normal;
		font-weight: normal;
		text-align: left;
		padding: 0 var(--side-padding);
	}

	.all-events-link {
		display: block;
		text-align: center;
		padding: var(--side-padding);
		font-size: 1.2rem;
	}

	@media screen and (min-width: 700px) {
		h2 {
			text-align: center;
			padding: 0;
		}

		.event-log-description {
			font-size: 1.8rem;
			text-align: center;
			padding: 0;
		}

		.all-events-link {
			font-size: 1.5rem;
		}
	}
</style>
