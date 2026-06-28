<script lang="ts">
	import CountDown from "$components/CountDown.svelte";
	import translations from "$stores/i18n-store";
	import type { EventShow } from "../../app";
	import { getUpcomingShow } from "$lib/get-upcoming-show";
	import formattedEventDate from "$lib/formatted-event-date.js";
	import { verifyVenue } from "$lib/verify-venue";
	import { createICSContent } from "$lib/create-ics-content";

	let { data = [] as EventShow[], screenWidth = 0 } = $props();
	const nextShow = $derived(getUpcomingShow(data));

	let eventIndex = $state(0);
	let bannerTitle = $derived($translations["nextEvent.banner.title"]);
	let eventLink = $derived($translations["nextEvent.banner.eventLink"]);
	let googleMapLink = $derived($translations["nextEvent.banner.googleMapLink"]);

	const canGoBackwards = $derived(eventIndex - 1 >= 0);
	const canGoForwards = $derived(eventIndex + 1 < nextShow.length);

	function changeEventIndex(action: "forward" | "backward" = "forward") {
		if (action === "backward" && canGoBackwards) eventIndex--;
		if (action === "forward" && canGoForwards) eventIndex++;
	}

	const hasMultipleEvents = $derived(nextShow.length > 1);
	const MAX_SCREEN_WIDTH = 640;
	const isHiddenForMobile = $derived(screenWidth <= MAX_SCREEN_WIDTH);

	// Swipe / drag tracking
	let touchStartX = $state(0);
	let touchStartY = $state(0);
	let dragOffset = $state(0);
	let isDragging = $state(false);

	function handleTouchStart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
		touchStartY = e.touches[0].clientY;
		isDragging = false;
		dragOffset = 0;
	}

	function handleTouchMove(e: TouchEvent) {
		const deltaX = e.touches[0].clientX - touchStartX;
		const deltaY = e.touches[0].clientY - touchStartY;
		if (!isDragging && Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
			isDragging = true;
		}
		if (isDragging) {
			dragOffset = deltaX;
			e.preventDefault();
		}
	}

	function handleTouchEnd(e: TouchEvent) {
		const deltaX = e.changedTouches[0].clientX - touchStartX;
		const deltaY = e.changedTouches[0].clientY - touchStartY;
		dragOffset = 0;
		isDragging = false;
		if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
			changeEventIndex(deltaX < 0 ? "forward" : "backward");
		}
	}
</script>

<section class="wrapper" aria-label={bannerTitle}>
	{#if hasMultipleEvents}
		<button class="arrow" onclick={() => changeEventIndex("backward")} disabled={!canGoBackwards}>&lt;</button>
	{/if}

	{#if nextShow.length > 0}
		<div
			id="next-event-banner"
			ontouchstart={handleTouchStart}
			ontouchmove={handleTouchMove}
			ontouchend={handleTouchEnd}
			role="banner"
		>
			<div class="slide-container">
				<div
					class="slide-track"
					style="transform: translateX(calc(-{eventIndex * 100}% + {dragOffset}px));
					       transition: {isDragging ? 'none' : 'transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'};"
				>
					{#each nextShow as event, i (i)}
						{@const venue = verifyVenue(event.venue)}
						{@const icsContent = createICSContent([event])}
						{@const icsUrl = `data:text/calendar;charset=utf-8,${encodeURIComponent(icsContent)}`}
						<div class="slide-item" aria-hidden={i !== eventIndex}>
							<div class="title">
								<h2>{bannerTitle}: <span>{formattedEventDate(new Date(event.date))}</span></h2>
							</div>
							<div class="count-down">
								<h3>{event.name}</h3>
								{#if !isHiddenForMobile}
									<CountDown date={new Date(event.date)} />
								{/if}
							</div>
							<div class="info">
								{#if venue}
									<a
										href="https://www.google.com/maps/search/{event.venue}/"
										rel="noreferrer nofollow"
										target="map-link"
										aria-label={googleMapLink}
									>
										{event.venue}
									</a>
								{:else}
									<span>{event.venue}</span>
								{/if}
								<a href={icsUrl} download="{event.name}.ics" aria-label={eventLink}>
									{eventLink}
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>

			{#if hasMultipleEvents}
				<div class="dots" role="group" aria-label="Event navigation">
					{#each nextShow as event, i (event.date)}
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

	{#if hasMultipleEvents}
		<button class="arrow" onclick={() => changeEventIndex("forward")} disabled={!canGoForwards}>&gt;</button>
	{/if}
</section>

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

    .arrow {
        display: none;
    }

    @media screen and (min-width: 641px) {
        .arrow {
            display: flex;
            align-items: center;
        }
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
        padding: 0 var(--side-padding) var(--side-padding);
        touch-action: pan-y;
        overflow: hidden;
    }

    .slide-container {
        flex: 1;
        overflow: hidden;
    }

    .slide-track {
        display: flex;
        width: 100%;
        will-change: transform;
    }

    .slide-item {
        flex-shrink: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0.25rem 0;
    }

    .title span {
        text-shadow: black 1px 1px 1px;
    }

    .count-down {
        display: flex;
        align-content: space-between;
        flex: 1;
    }

    .count-down h3 {
        flex: 1;
        text-shadow: black 1px 1px 1px;
    }

    .info {
        display: flex;
        gap: 8px;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0;
        margin: var(--side-padding) 0 0;
    }

    h2 {
        display: flex;
        justify-content: space-between;
        font-family: var(--font-body), sans-serif;
        font-size: 1.3125rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1;
        padding: 0;
        margin: 0.35rem 0 0;
        color: #000000;
    }

    h2 span {
        flex: 1;
        color: white;
        margin-left: 0.2rem;
    }

    h3 {
        padding: 0;
        margin: 0;
        font-family: var(--font-body), sans-serif;
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
        padding: 0.5rem 0 0;
    }

    .dot {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        border: 1.5px solid white;
        background: transparent;
        padding: 0;
        cursor: pointer;
        position: relative;
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