<script>
  import EventLog from "./EventLog.svelte";
  import NextEventBanner from "./NextEventBanner.svelte";
  import { getEventList } from "../network/get-event-list";

  let promise = getEventList();
</script>

{#await promise then events}
  <NextEventBanner />
  <div class="section">
    <EventLog data={events} />
  </div>
{:catch error}
  <p style="color: red;">{error.message}</p>
{/await}

<style>
  .section {
    border: thin solid red;
    width: 100%;
    max-width: 1080px;
    margin: 95px auto 83px;
  }
</style>
