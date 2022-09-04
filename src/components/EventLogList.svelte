<script lang="ts">
import EventLogEntry from "./EventLogEntry.svelte";
import { EventShow } from "./NextEventBanner.svelte";

type ShowData = {
  zeitstempel: string;
  eventDate: string;
  eventName: string;
  eventLink: string;
  eventLocation: string;
  eventStartTime: string;
};

export let data: ShowData[] = [];

function createEventLogList(data: EventShow[]) {
  let listData: ShowData[] = [];
  for (let i = 0; i < data.length; i++) {
    const event = data[i] as Partial<EventShow>;
    listData.push({
      eventName: event.name,
      eventDate: event.date,
      eventLink: event.link,
      eventStartTime: "",
      zeitstempel: "",
      eventLocation: event.venue,
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

@media screen and (max-width: 700px) {
  :root {
    --side-padding: 11px;
    --bottom-padding: 22px;
    --top-padding: 44px;
  }
}
@media screen and (max-width: 370px) {
  :root {
    --side-padding: 11px;
    --bottom-padding: 8px;
    --top-padding: 88px;
  }
}
</style>
