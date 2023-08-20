<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import SectionLabel from '$components/Layout/SectionLabel.svelte';
	import GdprBanner from '$components/MediaPlayer/GDPR-YouTube-Playlist.png';
	import { YOUTUBE_LOCALSTORAGE_KEY } from '$lib/constants';

	let consent = false;

	onMount(() => {
		consent = window.localStorage.getItem(YOUTUBE_LOCALSTORAGE_KEY) === 'true';
	});

	function toggleEmbeddedContent(node) {
		const handler = () => {
			window.localStorage.setItem(YOUTUBE_LOCALSTORAGE_KEY, 'true');
			consent = true;
		};

		node.addEventListener('click', handler);

		onDestroy(() => {
			node.removeEventListener('click', handler);
		});
	}
</script>

<div id="media-player">
	<SectionLabel title="YouTube Playlist #MCSCRPT" />

	{#if !consent}
		<button use:toggleEmbeddedContent>
			<img src={GdprBanner} alt="YouTube GDPR Consent Banner." />
		</button>
	{:else}
		<div id="youtube-video">
			<iframe
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
				height="560"
				src="https://www.youtube-nocookie.com/embed/videoseries?list=PLvGoDsjMiifcRAccwKmrX4LNl4H6XV8jo"
				title="YouTube video player"></iframe>
		</div>
	{/if}
</div>

<style>
	#media-player {
		overflow: hidden;
		position: relative;
		width: 100%;
		max-width: 1080px;
		margin: 0 auto;
	}
	#youtube-video {
		overflow: hidden;
		position: relative;
		width: 100%;
		max-width: 1080px;
		margin: 0 auto;
	}

	#youtube-video::after {
		padding-top: 56.25%;
		display: block;
		content: '';
	}

	#youtube-video iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	button {
		all: unset;
		display: flex;
		cursor: pointer;
		margin: 0;
	}

	button:focus {
		border: thick solid red;
		padding: 0;
		margin: 0;
	}

	img {
		width: 100%;
		padding: 0;
		margin: 0;
	}
</style>
