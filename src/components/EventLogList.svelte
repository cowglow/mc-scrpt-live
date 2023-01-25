<script lang="ts">
	import EventLogEntry from '$components/EventLogEntry.svelte';
	import EventShow from '$components/NextEventBanner.svelte';

	export let data = [];

	function createEventLogList(data: EventShow[]): {
		eventLocation: string;
		eventName: string;
		zeitstempel: string;
		eventStartTime: string;
		eventDate: Date;
		eventLink: string;
	}[] {
		return data.map((event: EventShow) => ({
			eventLocation: event.venue,
			eventName: event.name,
			zeitstempel: '',
			eventStartTime: '',
			eventDate: event.date,
			eventLink: event.link
		}));
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
		height: 582px;
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
