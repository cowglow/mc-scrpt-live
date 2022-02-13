<script lang="ts">
  import { writable } from "svelte/store";
  import { paginateContent } from "$lib/paginate-content";
  import { getUpcomingDates } from "$lib/get-upcoming-dates";
  import { ANCHOR_EVENTS } from "$lib/constants";
  import NextEventBanner from "./NextEventBanner.svelte";
  import EventLogList from "./EventLogList.svelte";
  import EventLogController from "./EventLogController.svelte";
  import { events } from "../data/event-list.json";
  import { getPreviousDates } from "$lib/get-previous-dates";

  const currentPage = writable(1);
  const MAX_EVENT = 7;

  const previousDates = getPreviousDates(events);
  const upcomingDates = getUpcomingDates(events);

  $: eventData = paginateContent(previousDates, $currentPage, MAX_EVENT);
  $: content = eventData.items;
  $: stepBackwardDisabled = !eventData.previousPage;
  $: stepForwardDisabled = !eventData.nextPage;

  const resetScroll = () =>
    document.getElementById(ANCHOR_EVENTS).scrollIntoView();

  const stepForward = () => {
    currentPage.set($currentPage + 1);
    resetScroll();
  };

  const stepBackward = () => {
    currentPage.set($currentPage - 1);
    resetScroll();
  };
</script>

<NextEventBanner data={upcomingDates} />
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
