<script lang="ts">
	import EventLogEntry from "./LogEntry.svelte";
	export let data = [];
</script>

<div class="wrapper">
	{#each data as event (event.date)}
		<EventLogEntry {...event} />
	{/each}
</div>

<style>
	.wrapper {
		overflow-y: auto;
		border: thin solid white;
		display: flex;
		flex-direction: column;
		margin: var(--side-padding) auto;
		padding: 0;
	}

</style>
