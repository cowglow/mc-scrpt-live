<script lang="ts">
	import EventLogEntry from "./LogEntry.svelte";
	export let data = [];
</script>

<div class="wrapper h-feed">
	{#each data as event (event.date)}
		<EventLogEntry {...event} />
	{/each}
</div>

<style>
	.wrapper {
		overflow-y: auto;
		border: thin solid black;
		display: flex;
		flex-direction: column;
		margin: 1px auto;
		padding: 0;
	}

</style>
