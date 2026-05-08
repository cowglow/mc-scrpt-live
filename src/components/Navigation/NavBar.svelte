<script lang="ts">
	import { ANCHOR_AUDIO, ANCHOR_EVENTS, ANCHOR_VIDEOS, DOWNLOAD_ROUTE } from "$lib/constants";
	import DrBass from "$components/DrBass.svelte";
	import translations from "$stores/i18n-store";

	let isOpen = $state(false);
	let toggleButton = $state<HTMLButtonElement | null>(null);
	let menuEl = $state<HTMLUListElement | null>(null);

	const navEvents = $derived($translations["nav.events"]);
	const navVideos = $derived($translations["nav.videos"]);
	const navAudio = $derived($translations["nav.audio"]);
	const navDownloads = $derived($translations["nav.downloads"]);
	const menuOpenLabel = $derived($translations["nav.menu.open"]);
	const menuCloseLabel = $derived($translations["nav.menu.close"]);

	function toggle() {
		isOpen = !isOpen;
		if (isOpen) {
			requestAnimationFrame(() => {
				(menuEl?.querySelector("a") as HTMLElement)?.focus();
			});
		}
	}

	function close() {
		isOpen = false;
		toggleButton?.focus();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "Escape" && isOpen) close();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<nav aria-label="Main navigation">
	<button
		bind:this={toggleButton}
		class="nav-toggle"
		aria-expanded={isOpen}
		aria-controls="navigation-menu"
		aria-label={isOpen ? menuCloseLabel : menuOpenLabel}
		onclick={toggle}
	>
		{#if isOpen}
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				<line x1="20" y1="4" x2="4" y2="20" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		{:else}
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<line x1="3" y1="7" x2="21" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				<line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				<line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
			</svg>
		{/if}
	</button>

	<ul bind:this={menuEl} id="navigation-menu" class:open={isOpen}>
		<li><a href={`/#${ANCHOR_EVENTS}`} onclick={close}>{navEvents}</a></li>
		<li><a href={`/#${ANCHOR_VIDEOS}`} onclick={close}>{navVideos}</a></li>
		<li><a href={`/#${ANCHOR_AUDIO}`} onclick={close}>{navAudio}</a></li>
		<li><a href={DOWNLOAD_ROUTE} onclick={close}>{navDownloads}</a></li>
		<li class="mascot"><DrBass /></li>
	</ul>
</nav>

<style>
	nav {
		flex-grow: 1;
		display: flex;
		align-items: center;
	}

	.nav-toggle {
		display: none;
		margin-left: auto;
		background: none;
		border: none;
		color: inherit;
		cursor: pointer;
		padding: 0.25rem;
		line-height: 0;
	}

	.nav-toggle:focus-visible {
		outline: 2px solid white;
		outline-offset: 4px;
	}

	ul#navigation-menu {
		flex-grow: 1;
		margin: 0 auto;
		padding: 0;
		display: none;
		list-style-type: none;
	}

	ul#navigation-menu > li {
		display: flex;
		align-items: center;
		margin-right: 13px;
	}

	ul#navigation-menu > li a {
		color: inherit;
		padding: 0;
		margin: 0;
		text-decoration: none;
		font-size: clamp(1rem, 3.2vw, 2.5rem);
	}

	ul#navigation-menu > li a:hover {
		color: red;
	}

	ul#navigation-menu > li a:active {
		color: #fff200ff;
	}

	.mascot {
		display: none;
	}

	/* Mobile */
	@media only screen and (max-width: 719px) {
		.nav-toggle {
			display: flex;
		}

		ul#navigation-menu.open {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 2rem;
			position: fixed;
			inset: 0;
			z-index: 99;
			background-color: black;
			padding: 90px var(--side-padding) var(--side-padding);
		}

		ul#navigation-menu.open > li {
			margin: 0;
		}

		ul#navigation-menu.open > li a {
			font-size: clamp(2rem, 8vw, 3rem);
		}

		ul#navigation-menu.open > li a:focus-visible {
			outline: 2px solid white;
			outline-offset: 4px;
		}

		ul#navigation-menu.open .mascot {
			display: flex;
		}

		ul#navigation-menu.open .mascot :global(svg) {
			height: 35vmin;
			width: auto;
		}
	}

	/* Desktop */
	@media only screen and (min-width: 720px) {
		ul#navigation-menu {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	@media only screen and (min-width: 1080px) {
		ul#navigation-menu {
			justify-content: flex-end;
		}

		ul#navigation-menu > li {
			margin-right: unset;
		}

		ul#navigation-menu > li:not(:first-child) {
			margin-left: 13px;
		}
	}
</style>