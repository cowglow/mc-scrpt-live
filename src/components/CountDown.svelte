<script lang="ts">
	import { onDestroy } from "svelte";
	import { getTimeDifference } from "$lib/get-time-difference";
	import translations from "$stores/i18n-store";

	$: days = $translations["nextEvent.banner.date.days"];
	$: hours = $translations["nextEvent.banner.date.hours"];
	$: minutes = $translations["nextEvent.banner.date.minutes"];
	$: seconds = $translations["nextEvent.banner.date.seconds"];
	export let date: Date = new Date(Date.now());
	let diff = getTimeDifference(date);

	let interval = setInterval(() => {
		diff = getTimeDifference(date);
	}, 1000);

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="wrapper">
	<div class="container"><span>{`0${diff.days}`.slice(-2)}</span><span>{days}</span></div>
	<div class="container"><span>{`0${diff.hours}`.slice(-2)}</span><span>{hours}</span></div>
	<div class="container"><span>{`0${diff.minutes}`.slice(-2)}</span><span>{minutes}</span></div>
	<div class="container"><span>{`0${diff.seconds}`.slice(-2)}</span><span>{seconds}</span></div>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: space-between;
		padding: 0;
		width: 100%;
		max-width: 276px;
	}

	.container {
		border: thin solid mediumpurple;
		display: flex;
		flex-direction: column;
		text-align: center;
		width: 53px;
		height: 59px;
		background-color: white;
		font-family: Teko, sans-serif;
		font-style: normal;
		font-weight: 500;
		color: #000000;
		padding: 0;
		margin: 0;
	}

	span:nth-child(1) {
		font-size: 34px;
		height: 60%;
	}

	span:nth-child(2) {
		font-size: 22px;
		height: 40%;
	}

	@media screen and (min-width: 700px) {
		div {
			margin: 0 auto;
		}
	}
</style>
