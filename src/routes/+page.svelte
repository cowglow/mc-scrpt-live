<script lang="ts">
	import eventLog from '$stores/event-log';
	import type { PageData } from './$types';
	export let data: PageData;
	const [eventData, loading, error, update] = eventLog('/data/event-list.json');
	update();

	function getFirst() {
		update('FIRST_EVENT');
	}
</script>

<button on:click={update}> Load </button>
<button on:click={getFirst}> FIRST </button>

{#if $loading}
	Loading: {$loading}
{:else if $error}
	Error: {$error}
{:else}
	<section>
		<pre>{JSON.stringify({ data, events: $eventData }, null, 2)}</pre>
	</section>
{/if}

<style>
	section {
		border: thin solid red;
		/*display: flex;*/
		/*flex-direction: column;*/
		/*justify-content: center;*/
		/*align-items: center;*/
		/*flex: 0.6;*/
	}
</style>
