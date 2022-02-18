<script lang="ts">
  import { eventContentStore } from "../stores/event-content-store";
  import { onDestroy } from "svelte";
  import EventLogEntry from "./EventLogEntry.svelte";

  let data: Pagination;

  const subscription = eventContentStore.subscribe(value => data = value);


  onDestroy(subscription);
</script>

<div class="wrapper">
  {#each data.items as event}
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
