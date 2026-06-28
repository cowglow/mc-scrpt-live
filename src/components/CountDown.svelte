<script lang="ts">
	import { onDestroy } from "svelte";
	import { getTimeDifference } from "$lib/get-time-difference";
	import translations from "$stores/i18n-store";

	$: days = $translations["nextEvent.banner.date.days"];
	$: hours = $translations["nextEvent.banner.date.hours"];
	$: minutes = $translations["nextEvent.banner.date.minutes"];
	$: seconds = $translations["nextEvent.banner.date.seconds"];
	$: label = $translations["nextEvent.banner.countdown.label"];

	export let date: Date = new Date(Date.now());
	let diff = getTimeDifference(date);
	const countdownData = {
		days: String(diff.days).padStart(2, "0"),
		hours: `0${diff.hours}`.slice(-2),
		minutes: `0${diff.minutes}`.slice(-2),
		seconds: `0${diff.seconds}`.slice(-2)
	};

	let interval = setInterval(() => {
		diff = getTimeDifference(date);
	}, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="wrapper" role="timer" aria-live="polite" aria-label={label}>
	<span class="sr-only">{countdownData.days}, {countdownData.hours}, {countdownData.minutes}</span>
	<div class="countdown-container" aria-hidden="true">
		{#if diff.days > 0}
			<div class="container"><span>{countdownData.days}</span><span>{days}</span></div>
		{/if}
		<div class="container"><span>{countdownData.hours}</span><span>{hours}</span></div>
		<div class="container"><span>{countdownData.minutes}</span><span>{minutes}</span></div>
		<div class="container"><span>{countdownData.seconds}</span><span>{seconds}</span></div>
	</div>
</div>

<style>
    .wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 276px;
    }
		.countdown-container {
				display: flex;
		}
    .container {
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 3.4rem;
        height: 3.4rem;
        background-color: white;
        font-family: var(--font-body), sans-serif;
        font-style: normal;
        font-weight: 500;
        color: #000000;
    }

    span:nth-child(1) {
        font-size: 2.125rem;
        height: 60%;
    }

    span:nth-child(2) {
        height: 40%;
    }

    @media screen and (min-width: 700px) {
        div {
            margin: 0 auto;
        }
    }
</style>
