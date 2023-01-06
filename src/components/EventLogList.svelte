<script lang="ts">
	import EventLogEntry from '$components/EventLogEntry.svelte';
	import EventShow from '$components/NextEventBanner.svelte';
	import type { ShowData } from '../app';

	export let data: ShowData[] = [];

	function createEventLogList(data: EventShow[]): ShowData[] {
		return data.map(
			(event: EventShow) =>
				({
					eventLocation: event.venue,
					eventName: event.name,
					zeitstempel: '',
					eventStartTime: '',
					eventDate: event.date,
					eventLink: event.link
				} as ShowData)
		);
	}

	$: listData = createEventLogList(data);
</script>

<div class="wrapper">
	{#each listData as event, index}
		<EventLogEntry {...event} />
	{/each}
</div>

<style>
	.wrapper {
		height: 420px;
		overflow-y: auto;
		border: thin solid white;
	}

	@media screen and (max-width: 700px) {
		:root {
			--side-padding: 11px;
			--bottom-padding: 22px;
			--top-padding: 44px;
		}
	}
	@media screen and (max-width: 370px) {
		:root {
			--side-padding: 11px;
			--bottom-padding: 8px;
			--top-padding: 88px;
		}
	}
</style>
