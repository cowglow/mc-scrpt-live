<script lang="ts">
  import EventLogEntry from "./EventLogEntry.svelte";
  import { getContext } from "svelte";

  let data = getContext('data')
</script>

<div class="wrapper">
  {#each data as event}
    <EventLogEntry date={event.eventDate} name={event.eventName} location={event.eventLocation}
                   link={event.eventLink} />
  {/each}
</div>

<style>
    .wrapper {
        height: 420px;
        overflow-y: auto;
    }

    @media screen and (min-width: 700px) {
        .wrapper {
            height: 100%;
        }
    }
</style>
