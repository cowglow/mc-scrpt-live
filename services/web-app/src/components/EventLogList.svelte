<script lang="ts">
  import EventLogEntry from "./EventLogEntry.svelte";
  export let data: Event[];
</script>

<div class="wrapper">
  {#each data as event}
    <EventLogEntry {...{ event }} />
  {/each}
</div>

<style>
  .wrapper {
    height: 420px;
    overflow-y: auto;
  }
</style>
