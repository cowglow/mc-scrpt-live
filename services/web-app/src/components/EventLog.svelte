<script lang="ts">
  import EventLogController from "./EventLogController.svelte";
  import EventLogList from "./EventLogList.svelte";
  import NextEventBanner from "./NextEventBanner.svelte";
  import { currentPage, eventContentStore, eventDataStore } from "../stores/event-content-store";

  const resetScroll = () => {
    // document.getElementById(ANCHOR_EVENTS).scrollIntoView();
    // console.log($eventContentStore.items[0].eventName)
  };

  const stepForward = () => {
    currentPage.set($currentPage + 1);
    resetScroll();
  };

  const stepBackward = () => {
    currentPage.set($currentPage - 1);
    resetScroll();
  };

</script>


<NextEventBanner data={$eventDataStore.upcomingEvents} />
<div class="wrapper">
  <h1>Previous Events</h1>
   <h3>
     You can usually catch me grooving alongside some of the coolest DJs in and
     around the 'Mittelfranken' region.
   </h3>
  <EventLogList data={$eventContentStore.items} />
  <EventLogController
    {...{
      stepBackwardDisabled: !$eventContentStore.previousPage,
      stepForwardDisabled: !$eventContentStore.nextPage,
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
