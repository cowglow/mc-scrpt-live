<script>
  import EventLog from "./EventLog.svelte";
  import NextEventBanner from "./NextEventBanner.svelte";
  import { getUpcomingDates } from "$lib/get-upcoming-dates";
  import events from "../data/event-list.json";
</script>

<div class="section">
  <NextEventBanner data={getUpcomingDates(events)} />
  <EventLog data={events} />
</div>

<style>
  .section {
    width: 100%;
    max-width: 1080px;
    margin: -95px auto 83px;
  }
</style>
