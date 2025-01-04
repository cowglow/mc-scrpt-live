<script lang='ts'>
	import CountDown from '$components/CountDown.svelte';
	import translations from '$stores/i18n-store';
	import type { EventShow } from '../../app';
	import { getUpcomingShow } from '$lib/get-upcoming-show';
	import formattedEventDate from '$lib/formatted-event-date.js';

	let { data = [], screenWidth } = $props<{ data: EventShow[]; screenWidth: number }>();
	const nextShow = getUpcomingShow(data);

	let eventIndex = $state(0);
	let label = $derived($translations['nextEvent.banner.title']);
	let cta = $derived($translations['nextEvent.banner.cta']);

	const canGoBackwards = $derived(eventIndex - 1 >= 0);
	const canGoForwards = $derived(eventIndex + 1 < data.length);

	function changeEventIndex(action: 'forward' | 'backward' = 'forward') {
		if (action === 'backward' && canGoBackwards) {
			eventIndex--;
		}
		if (action === 'forward' && canGoForwards) {
			eventIndex++;
		}
	}

	const MAX_SCREEN_WIDTH = 360;
</script>

<svelte:window bind:innerWidth={screenWidth} />
<div class='wrapper'>
	{#if screenWidth > MAX_SCREEN_WIDTH && data.length > 1}
		<button onclick={() => changeEventIndex("backward")} disabled={!canGoBackwards}>&lt;</button>
	{/if}
	{#if nextShow.length > 0}
		<div id='next-event-banner'>
			<div class='title'>
				<h1>{eventIndex < 1 ? label : formattedEventDate(new Date(nextShow[eventIndex].date))}</h1>
				<h2>{nextShow[eventIndex].name}</h2>
				<h3>{nextShow[eventIndex].venue}</h3>
			</div>
			{#if screenWidth > MAX_SCREEN_WIDTH}
				<div class='count-down'>
					<CountDown date={new Date(nextShow[eventIndex].date)} />
				</div>
			{/if}
			<div class='info'>
				<a href={nextShow[eventIndex].link} rel='noreferrer nofollow' target='event-link'>
					{cta}
				</a>
			</div>
		</div>
	{/if}
	{#if screenWidth > MAX_SCREEN_WIDTH && data.length > 1}
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
        background-color: var(--primary);
        flex-grow: 1;
        max-width: 1080px;
        width: 95%;
        min-height: 135px;
        margin: 0 auto;
        padding: 0 var(--side-padding);
    }
    .title {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        flex-grow: 1;
        padding: 0;
        margin: 10px auto;
    }
    .count-down {
        width: 25%;
    }
    .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        right: 0;
        padding: 0;
        margin: var(--side-padding) 0;
    }
    h1 {
        font-family: Teko, sans-serif;
        font-size: 21px;
        font-style: normal;
        font-weight: 500;
        line-height: 21px;
        padding: 0;
        margin: 0.35rem 0 0;
        color: #000000;
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
