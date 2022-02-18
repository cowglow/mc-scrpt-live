<script lang="ts">
  import EventLogEntry from "./EventLogEntry.svelte";
  export let data = [];
</script>

<div class="wrapper">
  {#each data as event}

    <pre>{JSON.stringify(event.eventName)}</pre>
<!--    <pre>{JSON.stringify(event.eventLocation)}</pre>-->
    <EventLogEntry {event} />
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
