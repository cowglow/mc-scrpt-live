<script>
  import EventLog from "./EventLog.svelte";
  import NextEventBanner from "./NextEventBanner.svelte";
  import { getEventList } from "../network/get-event-list";

  let promise = getEventList();
</script>

<div class="section">
  {#await promise}
    ...loading
  {:then events}
    <NextEventBanner />
    <EventLog data={events} />
  {:catch error}
    <p style="color: red;">{error.message}</p>
  {/await}
</div>

<style>
  .section {
    border: thin solid red;
    width: 100%;
    max-width: 1080px;
    margin: 95px auto 83px;
  }
</style>
