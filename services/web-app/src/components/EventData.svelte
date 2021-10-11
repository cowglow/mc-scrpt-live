<script>
  import EventLog from "./EventLog.svelte";
  import NextEventBanner from "./NextEventBanner.svelte";
  import { getEventList } from "../network/get-event-list";
  import { getUpcomingDates } from "../lib/get-upcoming-dates";

  let promise = getEventList();
</script>

<div class="section">
  {#await promise}
    ...loading
  {:then { Events }}
    <NextEventBanner data={getUpcomingDates(Events)} />
    <EventLog data={Events} />
  {:catch error}
    <p style="color: red;">{error.message}</p>
  {/await}
</div>

<style>
  .section {
    width: 100%;
    max-width: 1080px;
    margin: -95px auto 83px;
  }
</style>
