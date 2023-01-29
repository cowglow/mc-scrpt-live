<script lang="ts">
	import {derived, Readable, readable, Writable, writable} from 'svelte/store';
	import type {PageData} from './$types';
	import createShowCollection from '$lib/create-show-collection';
	import dataLoader from '$lib/data-loader';
	import {
		ANCHOR_AUDIO,
		ANCHOR_EVENTS,
		ANCHOR_VIDEOS,
		EVENT_CONTENT_DEFAULT_PAGE,
		JSON_PATH,
		MAX_EVENT_ITEMS
	} from '$lib/constants';
	import paginateContent from '$lib/paginate-content';
	import EventLog from '$components/EventLog.svelte';
	import MediaPlayer from '$components/MediaPlayer/MediaPlayer.svelte';
	import SoundCloudPlayer from '$components/SoundCloudPlayer/SoundCloudPlayer.svelte';

	export let data: PageData;

	let spawned = true;
	let currentPage: Writable<number>
	let maxPages: Readable<number>
	// eslint-disable-next-line no-undef
	let eventShowData: Writable<EventShow[]>;
	let totalPages: Writable<number>;
	let shows;

	if (data) {
		currentPage = writable(EVENT_CONTENT_DEFAULT_PAGE);
		maxPages = readable(MAX_EVENT_ITEMS);
		eventShowData = writable(data.data);
		totalPages = writable(data.total);

		shows = derived([eventShowData, currentPage, maxPages, totalPages], paginateContent);
	}

	async function onStepBackward() {
		$currentPage--;
	}

	async function onStepForward() {
		if (spawned) {
			const events = await loadEventData();
			$eventShowData = createShowCollection(events);
			spawned = false;
		}
		$currentPage++;
	}

	async function loadEventData() {
		const {events} = await dataLoader(JSON_PATH, fetch);
		return events;
	}
</script>

<svelte:head>
	<title>MC.SCRPT.LIVE | Drum and Bass MC</title>
</svelte:head>

<section class="events" id={ANCHOR_EVENTS}>
	<EventLog data={$shows} stepForward={onStepForward} stepBackward={onStepBackward} />
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
