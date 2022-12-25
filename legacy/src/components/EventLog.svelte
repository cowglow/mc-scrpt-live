<script lang="ts">
  import type { Pagination } from "../app";

  export let disableBanner: boolean;
  import { writable } from "svelte/store";
  import { ANCHOR_EVENTS } from "$lib/constants";
  import { paginateContent } from "$lib/paginate-content";
  import { CurrentPageStore, EVENT_CONTENT_DEFAULT_PAGE } from "$lib/stores/current-page-store";
  import { EventDataStore } from "$lib/stores/event-content-store";
  import EventLogController from "$components/EventLogController.svelte";
  import EventLogList from "$components/EventLogList.svelte";
  import NextEventBanner from "$components/NextEventBanner.svelte";

  const { previousEvents } = $EventDataStore;

  let paginatedContent = writable<Pagination>(
    paginateContent(EVENT_CONTENT_DEFAULT_PAGE, previousEvents)
  );

  CurrentPageStore.subscribe((currentPage) => {
    const newPaginatedContent = paginateContent(currentPage, previousEvents);
    paginatedContent.set(newPaginatedContent);
  });

  const resetScroll = () => {
    document.getElementById(ANCHOR_EVENTS).scrollIntoView();
  };

  const stepForward = () => {
    $CurrentPageStore++;
    resetScroll();
  };

  const stepBackward = () => {
    $CurrentPageStore--;
    resetScroll();
  };
</script>

{#if !disableBanner}
  <NextEventBanner data={$EventDataStore.upcomingEvents} />
{/if}
<div class="wrapper">
  <h1>Previous Events</h1>
  <h3>
    You can usually catch me grooving alongside some of the coolest DJs in and around the
    'Mittelfranken' region.
  </h3>
  <EventLogList data={$paginatedContent.items} />
  <EventLogController
    {...{
      stepBackwardDisabled: !$paginatedContent.previousPage,
      stepForwardDisabled: !$paginatedContent.nextPage,
      stepForward,
      stepBackward
    }}
  />
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1080px;
    /*padding: 0 var(--side-padding) var(--bottom-padding);*/
    /*margin: -40px auto 0;*/
    /*margin: 0 auto;*/
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
