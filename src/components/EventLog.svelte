<script lang="ts">
	import EventLogList from '$components/EventLogList.svelte';
	import EventLogController from '$components/EventLogController.svelte';
	import NextEventBanner from '$components/NextEventBanner.svelte';
	import { getPreviousDates, getUpcomingDates } from '$lib/date-filters';

	export let disableBanner: boolean;
	export let data: PaginatedShows;
	export let stepForward;
	export let stepBackward;
	const previousEvents = getPreviousDates(data.shows);
	const upcomingEvents = getUpcomingDates(data.shows);
</script>

{#if !disableBanner}
	<NextEventBanner data={upcomingEvents} />
{/if}
<div class="wrapper">
	<h1>Previous Events</h1>
	<h3>
		You can usually catch me grooving alongside some of the coolest DJs in and around the
		'Mittelfranken' region.
	</h3>
	<EventLogList data={previousEvents} />
	<EventLogController
		{...{
			stepBackwardDisabled: !data.previousPage,
			stepForwardDisabled: !data.nextPage,
			stepForward,
			stepBackward
		}}
	/>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1080px;
		padding: 0 var(--side-padding) var(--bottom-padding);
		margin: 0 auto;
	}

	h1 {
		font-family: Teko, sans-serif;
		font-size: 3.8rem;
		text-align: left;
		left: 0;
		margin: var(--side-padding) 0 0;
		padding: 0;
	}

	h3 {
		font-size: 1.2rem;
		font-style: normal;
		font-weight: normal;
		text-align: left;
	}

	@media screen and (min-width: 700px) {
		h1 {
			text-align: center;
		}

		h3 {
			font-size: 1.8rem;
			text-align: center;
			padding: 0 13%;
		}
	}
</style>
