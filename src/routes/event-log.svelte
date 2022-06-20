<script lang="ts">
import EventLog from "$components/EventLog.svelte";
import { ANCHOR_EVENTS } from "$lib/constants.ts";
</script>

<div id="{ANCHOR_EVENTS}">
  <EventLog disableBanner="true" />
</div>
