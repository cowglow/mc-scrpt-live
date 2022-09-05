<script lang="ts">
import EventLog from "components/EventLog.svelte";
import { ANCHOR_EVENTS } from "lib/constants";
</script>

<div id="{ANCHOR_EVENTS}">
  <EventLog disableBanner="{false}" />
</div>
