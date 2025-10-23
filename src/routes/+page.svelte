<script lang="ts">
	import { ANCHOR_AUDIO, ANCHOR_EVENTS, ANCHOR_VIDEOS, BANNER_DISMISSED_KEY } from "$lib/constants";
	import MediaPlayer from "$components/MediaPlayer/MediaPlayer.svelte";
	import SoundCloudPlayer from "$components/SoundCloudPlayer/SoundCloudPlayer.svelte";
	import EventLog from "$components/EventLog/EventLog.svelte";
	import translations from "$stores/i18n-store";
	import SocialMedia from "$components/SocialMedia/Menu.svelte";

	export let data;
	const { upcomingShows, previousShows } = data;
	$: messageOpening = $translations["message.opening"];
	$: messageBody = $translations["message.body"];
	$: messageClosing = $translations["message.closing"];

	let showBanner = false;

	if (typeof window !== "undefined") {
		showBanner = localStorage.getItem(BANNER_DISMISSED_KEY) !== "true";
	}

	function hideBanner() {
		showBanner = false;
		localStorage.setItem(BANNER_DISMISSED_KEY, "true");
	}
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

{#if showBanner}
	<section class="message">
		<div>
			<h1>Servus!</h1>
			<p>{messageOpening}</p>
			<p>{messageBody}</p>
			<div style="display:flex;justify-content:space-between;">
				<SocialMedia />
				<button on:click={hideBanner}>
					{messageClosing}
				</button>
			</div>
			<br />
			<br />
			<br />
		</div>
	</section>
{/if}

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
	.message {
		top: 0;
		position: absolute;
		background-color: black;
		color: #ffffff;
		padding: var(--top-padding);
		width: 100%;
		height: 100%;
	}

	.message button {
		font-family: var(--font-family-body), serif;
		font-size: larger;
		color: var(--white);
		background: var(--primary);
		padding: var(--side-padding);
	}

	.message button:hover {
		background: var(--secondary);
		color: var(--primary);
		cursor: pointer;
	}

	.message button:active {
		color: var(--white);
	}

	.message div {
		width: 100%;
		max-width: 1080px;
		overflow: hidden;
		position: relative;
		margin: 0 auto;
	}

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
