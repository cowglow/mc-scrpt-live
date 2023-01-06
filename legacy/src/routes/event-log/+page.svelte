<script lang="ts">
	import EventLog from '$components/EventLog.svelte';
	import { ANCHOR_EVENTS } from '$lib/constants';
</script>

<svelte:head>
	<title>MC.SCRPT.LIVE | Event Log</title>
</svelte:head>
<div id={ANCHOR_EVENTS}>
	<EventLog disableBanner={false} />
</div>
