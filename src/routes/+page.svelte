<script lang="ts">
	import type { PageData } from './$types';
	import {
		ANCHOR_AUDIO,
		ANCHOR_EVENTS,
		ANCHOR_VIDEOS,
		EVENT_CONTENT_DEFAULT_PAGE,
		MAX_EVENT_ITEMS
	} from '$lib/constants';
	import MediaPlayer from '$components/MediaPlayer/MediaPlayer.svelte';
	import SoundCloudPlayer from '$components/SoundCloudPlayer/SoundCloudPlayer.svelte';
	import EventLog from '$components/EventLog.svelte';
	import type { Readable, Writable } from 'svelte/store';
	import { derived, readable, writable } from 'svelte/store';
	import type EventShow from '../app.d.ts';
	import paginateContent from '$lib/paginate-content.js';
	import dataLoader from '$lib/data-loader';
	import { JSON_PATH } from '$lib/constants';
	import createShowCollection from '$lib/create-show-collection';

	type PageDataType<T> = {
		shows: EventShow[];
		total: number;
	};
	export let data: PageDataType<PageData>;

	let spawned: Writable<boolean> = writable(true);

	// eslint-disable-next-line no-undef
	let eventShowData: Writable<EventShow[]> = writable(data.shows);
	let currentPage: Writable<number> = writable(EVENT_CONTENT_DEFAULT_PAGE);
	let maxPages: Readable<number> = readable(MAX_EVENT_ITEMS);
	let totalPages: Writable<number> = writable(data.total);

	function onStepBackward() {
		$currentPage--;
	}

	async function onStepForward() {
		console.log('onStepForward');
		// if ($spawned) {
		// 	const { events } = await dataLoader(JSON_PATH, fetch);
		// 	$eventShowData = createShowCollection(events);
		// 	$spawned = false;
		// }
		$currentPage++;
	}

	let shows = derived([eventShowData, currentPage, maxPages, totalPages], paginateContent);
</script>

<svelte:head>
	<title>MC.SCRPT.LIVE | Drum and Bass MC</title>
</svelte:head>

<section class="events" id={ANCHOR_EVENTS}>
	<EventLog data={$shows} stepForward={onStepForward} stepBackward={onStepBackward} />
	<pre>--- {JSON.stringify({ $currentPage, $eventShowData }, null, 2)}</pre>
</section>

<section class="videos" id={ANCHOR_VIDEOS}>
	<MediaPlayer />
</section>

<section class="audio" id={ANCHOR_AUDIO}>
	<SoundCloudPlayer />
</section>

<style>
	.events {
		background-color: black;
		color: #ffffff;
		padding: 0;
	}
	.videos {
		background-color: black;
		color: #ffffff;
		padding: var(--side-padding);
	}

	.audio {
		padding: var(--side-padding);
	}

	@media screen and (min-width: 1080px) {
		.audio {
			padding: 0 0 42px;
		}
	}
</style>
