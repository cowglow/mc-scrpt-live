<script lang="ts">
	import CountDown from "$components/CountDown.svelte";
	import translations from "$stores/i18n-store";
	import type { EventShow } from "../../app";
	import { getUpcomingShow } from "$lib/get-upcoming-show";
	import formattedEventDate from "$lib/formatted-event-date.js";
	import { verifyVenue } from "$lib/verify-venue";

	let { data = [] as EventShow[], screenWidth = 0 } = $props();
	const nextShow = $derived(getUpcomingShow(data));

	let eventIndex = $state(0);
	let label = $derived($translations["nextEvent.banner.title"]);
	let fbEvent = $derived($translations["nextEvent.banner.fbEvent"]);
	let googleMap = $derived($translations["nextEvent.banner.googleMap"]);

	const verifiedVenue = $derived(verifyVenue(nextShow[eventIndex].venue));
	const hasValidLink = $derived(nextShow[eventIndex].link.trim() !== "");

	const canGoBackwards = $derived(eventIndex - 1 >= 0);
	const canGoForwards = $derived(eventIndex + 1 < nextShow.length);

	function changeEventIndex(action: "forward" | "backward" = "forward") {
		if (action === "backward" && canGoBackwards) {
			eventIndex--;
		}
		if (action === "forward" && canGoForwards) {
			eventIndex++;
		}
	}

	const hasMultipleEvents = $derived(nextShow.length > 1);

	const MAX_SCREEN_WIDTH = 640;
	const isHiddenForMobile = $derived(screenWidth <= MAX_SCREEN_WIDTH);

	let touchStartX = $state(0);
	let touchStartY = $state(0);

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
		touchStartY = e.touches[0].clientY;
	}

	function handleTouchEnd(e: TouchEvent) {
		const deltaX = e.changedTouches[0].clientX - touchStartX;
		const deltaY = e.changedTouches[0].clientY - touchStartY;
		if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
			changeEventIndex(deltaX < 0 ? "forward" : "backward");
		}
	}
</script>

<div class="wrapper">
	{#if hasMultipleEvents && !isHiddenForMobile}
		<button onclick={() => changeEventIndex("backward")} disabled={!canGoBackwards}>&lt;</button>
	{/if}
	{#if nextShow.length > 0}
		<div
			id="next-event-banner"
			ontouchstart={handleTouchStart}
			ontouchend={handleTouchEnd}
		>
			<div class="title">
				<h1>{label}: <span>{formattedEventDate(new Date(nextShow[eventIndex].date))}</span></h1>
			</div>
			<div class="count-down">
				<h2>{nextShow[eventIndex].name}</h2>
				{#if !isHiddenForMobile}
					<CountDown date={new Date(nextShow[eventIndex].date)} />
				{/if}
			</div>
			<div class="info">
				{#if verifiedVenue}
					<a
						href="https://www.google.com/maps/search/{nextShow[eventIndex].venue}/"
						rel="noreferrer nofollow"
						target="map-link"
						aria-label={`View ${googleMap} location on Google Maps`}
					>
						{nextShow[eventIndex].venue}
					</a>
				{:else}
					<span>{nextShow[eventIndex].venue}</span>
				{/if}
				{#if hasValidLink}
					<a
						href={nextShow[eventIndex].link}
						rel="noreferrer nofollow"
						target="event-link"
						aria-label="View Facebook event"
					>
						{fbEvent}
					</a>
				{/if}
			</div>
			{#if hasMultipleEvents}
				<div class="dots" role="group" aria-label="Event navigation">
					{#each nextShow as _, i}
						<button
							class="dot"
							class:active={i === eventIndex}
							onclick={() => (eventIndex = i)}
							aria-label={`Event ${i + 1} of ${nextShow.length}`}
							aria-pressed={i === eventIndex}
						></button>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
	{#if hasMultipleEvents && !isHiddenForMobile}
		<button onclick={() => changeEventIndex("forward")} disabled={!canGoForwards}>&gt;</button>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: center;
		margin: 0 auto;
		padding: 0;
	}

	button {
		cursor: pointer;
		background-color: var(--secondary);
		margin: 0;
		padding: 0 0.5rem;
		border: thin solid white;
		color: white;
	}

	button:active {
		color: var(--active);
		border-color: var(--active);
	}

	button[disabled] {
		border-color: var(--secondary);
		color: var(--primary);
		cursor: unset;
	}

	#next-event-banner {
		display: flex;
		flex-direction: column;
		background-color: var(--primary);
		max-width: 1080px;
		width: 95%;
		min-height: 135px;
		padding: 0 var(--side-padding);
		touch-action: pan-y;
	}

	.title {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 0.25rem 0;
	}

	.count-down {
		display: flex;
		align-content: space-between;
		flex: 1;
	}

	.count-down h2 {
		flex: 1;
	}

	.info {
		display: flex;
		gap: 8px;
		justify-content: space-between;
		align-items: flex-end;
		right: 0;
		padding: 0;
		margin: var(--side-padding) 0;
	}

	h1 {
		display: flex;
		justify-content: space-between;
		font-family: Teko, sans-serif;
		font-size: 1.3125rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1;
		padding: 0;
		margin: 0.35rem 0 0;
		color: #000000;
	}

	h1 span {
		flex: 1;
		color: white;
		margin-left: 0.2rem;
	}

	h2 {
		padding: 0;
		margin: 0;
		font-family: Teko, sans-serif;
		font-size: 2.375rem;
		font-style: normal;
		font-weight: 500;
		line-height: 1.21;
		display: flex;
		align-items: flex-end;
		color: #ffffff;
	}

	a {
		color: white;
		text-align: right;
		text-decoration: underline;
	}

	a:hover {
		color: var(--secondary);
	}

	a:active {
		color: var(--active);
		text-decoration: none;
	}

	.dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.5rem 0;
	}

	.dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		border: 1.5px solid white;
		background: transparent;
		padding: 0;
		/* expand tap target without changing visual size */
		position: relative;
		cursor: pointer;
	}

	.dot::before {
		content: "";
		position: absolute;
		inset: -0.75rem;
	}

	.dot.active {
		background: white;
	}

	.dot:focus-visible {
		outline: 2px solid white;
		outline-offset: 4px;
	}
</style>