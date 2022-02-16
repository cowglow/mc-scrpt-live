<script lang="ts">
  import NextEventBanner from "./NextEventBanner.svelte";
  import EventLogList from "./EventLogList.svelte";
  import EventLogController from "./EventLogController.svelte";
  import {
    EVENT_CONTENT_MAX_PAGES,
    EVENT_CONTENT_PREVIOUS_DATES,
    EVENT_CONTENT_UPCOMING_DATES,
    eventContentStore,
    eventContentStoreCurrentPage,
  } from "../stores/event-content-store";
  import { paginateContent } from "$lib/paginate-content";

  const content = $eventContentStore.items;
  const stepBackwardDisabled = !$eventContentStore.previousPage;
  const stepForwardDisabled = !$eventContentStore.nextPage;

  const resetScroll = () => {
    // document.getElementById(ANCHOR_EVENTS).scrollIntoView();
    const newValue = paginateContent(
      EVENT_CONTENT_PREVIOUS_DATES,
      $eventContentStoreCurrentPage,
      EVENT_CONTENT_MAX_PAGES
    );
    console.log(newValue);
    eventContentStore.set(newValue);
  };

  const stepForward = () => {
    eventContentStoreCurrentPage.set($eventContentStoreCurrentPage + 1);
    resetScroll();
  };

  const stepBackward = () => {
    eventContentStoreCurrentPage.set($eventContentStoreCurrentPage - 1);
    resetScroll();
  };
</script>

<NextEventBanner data={EVENT_CONTENT_UPCOMING_DATES} />
<div class="wrapper">
  <h1>Previous Events</h1>
  <h3>
    You can usually catch me grooving alongside some of the coolest DJs in and
    around the 'Mittelfranken' region.
  </h3>
  <EventLogList data={content} />
  <EventLogController
    {...{
      stepBackwardDisabled,
      stepForwardDisabled,
      stepForward,
      stepBackward,
    }}
  />
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1080px;
    padding: 0 var(--side-padding) var(--bottom-padding);
    margin: 0 auto;
  }
  h1 {
    font-family: Teko, sans-serif;
    font-size: 3.8rem;
    text-align: left;
    left: 0;
    margin: var(--side-padding) 0 0;
    padding: 0;
  }
  h3 {
    font-size: 1.2rem;
    font-style: normal;
    font-weight: normal;
    text-align: left;
  }
  img {
    padding: 0.25rem 3rem;
    margin: 0;
  }
  @media screen and (min-width: 700px) {
    h1 {
      text-align: center;
    }
    h3 {
      font-size: 1.8rem;
      text-align: center;
      padding: 0 13%;
    }
  }
</style>
