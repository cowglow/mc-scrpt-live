<script lang="ts">
import EventLogEntry from "./EventLogEntry.svelte";

export let data: ShowData[] = [];

function createEventLogList(data) {
  let listData = [];
  for (let i = 0; i < data.length; i++) {
    listData.push({
      eventDate: data[i].eventDate,
      eventName: data[i].eventName,
      eventLink: data[i].eventLink,
      eventLocation: data[i].eventLocation,
    });
  }
  return listData;
}

$: listData = createEventLogList(data);
</script>

<div class="wrapper">
  {#each listData as event, index}
    <EventLogEntry {...event} />
  {/each}
</div>

<style>
.wrapper {
  height: 420px;
  overflow-y: auto;
  border: thin solid white;
}

@media screen and (min-width: 700px) {
  .wrapper {
    height: 100%;
  }
}
</style>
