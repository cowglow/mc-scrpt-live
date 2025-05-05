<script lang="ts">
	import CountDown from "$components/CountDown.svelte";
	import translations from "$stores/i18n-store";
	import type { EventShow } from "../../app";
	import { getUpcomingShow } from "$lib/get-upcoming-show";
	import formattedEventDate from "$lib/formatted-event-date.js";
	import { verifyVenue } from "$lib/verify-venu";

	let { data = [] as EventShow[], screenWidth = 0 } = $props();
	const nextShow = getUpcomingShow(data);

	let eventIndex = $state(0);
	let label = $derived($translations["nextEvent.banner.title"]);
	let fbEvent = $derived($translations["nextEvent.banner.fbEvent"]);
	let googleMap = $derived($translations["nextEvent.banner.googleMap"]);

	const verifiedVenue = $derived(verifyVenue(nextShow[eventIndex].venue));

	const canGoBackwards = $derived(eventIndex - 1 >= 0);
	const canGoForwards = $derived(eventIndex + 1 < data.length);

	function changeEventIndex(action: "forward" | "backward" = "forward") {
		if (action === "backward" && canGoBackwards) {
			eventIndex--;
		}
		if (action === "forward" && canGoForwards) {
			eventIndex++;
		}
	}

	const hasMultipleEvents = data.length > 1;

	const MAX_SCREEN_WIDTH = 640;
	const isHiddenForMobile = $derived(screenWidth <= MAX_SCREEN_WIDTH);
</script>

<div class="wrapper">
	{#if hasMultipleEvents && !isHiddenForMobile}
		<button onclick={() => changeEventIndex("backward")} disabled={!canGoBackwards}>&lt;</button>
	{/if}
	{#if nextShow.length > 0}
		<div id="next-event-banner">
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
						aria-label={googleMap}
					>
						{nextShow[eventIndex].venue}
					</a>
				{:else}
					<span>{nextShow[eventIndex].venue}</span>
				{/if}
				<a
					href={nextShow[eventIndex].link}
					rel="noreferrer nofollow"
					target="event-link"
					aria-label={fbEvent}
				>
					{fbEvent}
				</a>
			</div>
		</div>
	{/if}
	{#if hasMultipleEvents && !isHiddenForMobile}
		<button onclick={() => changeEventIndex("forward")} disabled={!canGoForwards}>&gt;</button>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		margin: 0 auto;
		padding: 0;
	}

	button {
		cursor: pointer;
		background-color: var(--secondary);
		margin: 0;
		padding: 0 0.5rem;
		border: unset;
		color: white;
		border: thin solid white;
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
		margin: 0 auto;
		padding: 0 var(--side-padding);
	}

	.title {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin: 10px 0;
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
		font-size: 21px;
		font-style: normal;
		font-weight: 500;
		line-height: 21px;
		padding: 0;
		margin: 0.35rem 0 0;
		color: #000000;
		width: 100%;
	}

	h1 span {
		color: white;
	}

	h2 {
		padding: 0;
		margin: 0;
		font-family: Teko, sans-serif;
		font-size: 38px;
		font-style: normal;
		font-weight: 500;
		line-height: 46px;
		display: flex;
		align-items: flex-end;
		color: #ffffff;
	}

	h3 {
		padding: 0;
		margin: 0;
		font-family: Teko, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 21px;
		line-height: 21px;
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

	@media screen and (max-width: 370px) {
		#next-event-banner {
			flex-direction: column;
		}

		.title {
			margin: 0.25rem 0;
		}
	}
</style>
