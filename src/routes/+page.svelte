<script lang="ts">
	import type { PageData } from './$types';
	import {
		ANCHOR_AUDIO,
		ANCHOR_EVENTS,
		ANCHOR_VIDEOS,
	} from '$lib/constants';
	import MediaPlayer from '$components/MediaPlayer/MediaPlayer.svelte';
	import SoundCloudPlayer from '$components/SoundCloudPlayer/SoundCloudPlayer.svelte';
	import EventLog from '$components/EventLog/EventLog.svelte';

	export let data: PageData;

	const { upcomingShows, previousShows } = data;
</script>

<svelte:head>
	<title>MC.SCRPT.LIVE | Drum and Bass MC</title>
</svelte:head>

<section class="events" id={ANCHOR_EVENTS}>
	<EventLog {upcomingShows} {previousShows} />
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
