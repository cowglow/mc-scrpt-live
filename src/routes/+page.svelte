<script lang="ts">
	import type { PageData } from './$types';
	import EventLogController from '$components/EventLogController.svelte';
	import dataLoader from '$stores/data-loader';
	import { derived, readable, writable } from 'svelte/store';
	import paginateContent from '$lib/paginate-content';
	import {
		ANCHOR_AUDIO,
		ANCHOR_EVENTS,
		ANCHOR_VIDEOS,
		JSON_PATH,
		MAX_EVENT_ITEMS
	} from '$lib/constants';
	import MediaPlayer from '$components/MediaPlayer/MediaPlayer.svelte';
	import SoundCloudPlayer from '$components/SoundCloudPlayer/SoundCloudPlayer.svelte';

	export let data: PageData;

	let spawned = true;
	const currentPage = writable(1);
	const maxPages = readable(MAX_EVENT_ITEMS);
	const eventShowData = writable([]);
	const totalPages = readable(0);

	if (data) {
		$eventShowData = data.data;
		$totalPages = data.total;
	}

	const shows = derived([eventShowData, currentPage, maxPages, totalPages], paginateContent);

	async function loadEventData() {
		const { events } = await dataLoader(JSON_PATH, fetch);
		return events;
	}

	async function onStepBackward() {
		if (spawned) {
			$eventShowData = await loadEventData();
			spawned = false;
		}
		$currentPage--;
	}

	async function onStepForward() {
		if (spawned) {
			$eventShowData = await loadEventData();
			spawned = false;
		}
		$currentPage++;
	}
</script>

<svelte:head>
	<title>MC.SCRPT.LIVE | Drum and Bass MC</title>
</svelte:head>

<section><pre>{JSON.stringify($shows, null, 2)}</pre></section>
<div class="anchor-off-set" id={ANCHOR_EVENTS}>anchor events</div>
<EventLogController
	stepBackward={onStepBackward}
	stepForward={onStepForward}
	stepBackwardDisabled={!$shows.previousPage}
	stepForwardDisabled={!$shows.nextPage}
/>

<section class="videos" id={ANCHOR_VIDEOS}>
	<MediaPlayer />
</section>

<section class="audio" id={ANCHOR_AUDIO}>
	<SoundCloudPlayer />
</section>

<style>
	.videos {
		background-color: black;
		color: #ffffff;
		padding: var(--side-padding);
	}

	.audio {
		width: 100%;
		max-width: 1080px;
		padding: var(--side-padding);
		margin: 0 auto;
	}

	@media screen and (min-width: 1080px) {
		.audio {
			padding: 0 0 42px;
		}
	}
</style>
