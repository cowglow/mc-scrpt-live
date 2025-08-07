<script lang="ts">
	import { ANCHOR_AUDIO, ANCHOR_EVENTS, ANCHOR_VIDEOS } from "$lib/constants";
	import MediaPlayer from "$components/MediaPlayer/MediaPlayer.svelte";
	import SoundCloudPlayer from "$components/SoundCloudPlayer/SoundCloudPlayer.svelte";
	import EventLog from "$components/EventLog/EventLog.svelte";

	export let data;

	const { upcomingShows, previousShows } = data;
</script>

<svelte:head>
	<meta property="og:title" content="MC SCRPT | Drum and Bass MC" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://mc.scrpt.live" />
	<meta property="og:image" content="https://mc.scrpt.live/images/og-image.png" />
	<meta property="og:description" content="Upcoming shows, videos and music." />
	<link
		rel="preload"
		href="/fonts/PressStart2P-Regular.woff2"
		crossorigin="anonymous"
		as="font"
		type="font/woff2"
	/>
	<link
		rel="preload"
		href="/fonts/ShareTechMono-Regular.woff2"
		crossorigin="anonymous"
		as="font"
		type="font/woff2"
	/>
	<link
		rel="preload"
		href="/fonts/bd_console.woff2"
		crossorigin="anonymous"
		as="font"
		type="font/woff2"
	/>
	<link
		rel="preload"
		href="/fonts/teko-regular.woff2"
		crossorigin="anonymous"
		as="font"
		type="font/woff2"
	/>
	<link
		rel="preload"
		href="/fonts/teko-medium.woff2"
		crossorigin="anonymous"
		as="font"
		type="font/woff2"
	/>
</svelte:head>

<section class="videos">
	<div style="width: 70%; margin: 0 auto;">
		<h1>Servus!</h1>
		<p>Ich bin jetzt schon seit fast 10 Jahren als MC Scrpt unterwegs.</p>
		<p>
			Ich bin echt stolz und froh, dass ich mich kreativ ausleben kann.
			ich bin froh, dass ihr mich so gut aufgenommen habt!
			Ich weiß nicht, was die Zukunft bringt, aber ich muss meine Website aktualisieren!
		</p>
		<p>Tanzt weiter!</p>
	</div>
</section>
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
