<script lang="ts">
	import { EventDataStore } from '$stores/event-data';
	const { latest } = $EventDataStore;
	const events = latest();
</script>

<section>
	<pre>{JSON.stringify(events, null, 2)}</pre>
</section>

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
