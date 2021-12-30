<script lang="ts">
  import { writable } from "svelte/store";
  import EventLogEntry from "./EventLogEntry.svelte";
  import { paginateContent } from "$lib/paginate-content";
  export let data: Event[];
  let eventsElement;
  const { events } = data;
  const page = writable(1);
  const MAX_EVENT = 7;

  $: eventData = paginateContent(events, $page, MAX_EVENT);
  $: stepBackwardDisabled = !eventData.previousPage;
  $: stepForwardDisabled = !eventData.nextPage;

  const resetScroll = () => {
    eventsElement.scrollTo(0, 0);
  };
  const stepForward = () => {
    page.set($page + 1);
    resetScroll();
  };

  const stepBackward = () => {
    page.set($page - 1);
    resetScroll();
  };
</script>

<h1>Previous Events</h1>
<h3>
  You can usually catch me grooving alongside some of the coolest DJs in and
  around the 'Mittelfranken' region.
</h3>
<div class="events" bind:this={eventsElement}>
  {#each eventData.items as event}
    <EventLogEntry {event} />
  {/each}
</div>

<div class="controller">
  <button on:click={stepBackward} disabled={stepBackwardDisabled}>
    <img src="/images/expand-less.svg" alt="Previous page" />
  </button>
  <button on:click={stepForward} disabled={stepForwardDisabled}>
    <img src="images/expand-more.svg" alt="Next page" />
  </button>
</div>

<style>
  h1 {
    font-family: Teko, sans-serif;
    font-size: 3.8rem;
    text-align: center;
    margin: 45px auto 0;
    padding: 0;
  }
  h3 {
    font-size: 1.2rem;
    padding: 0 13px;
    margin: 13px auto;
    font-style: normal;
    font-weight: normal;
    text-align: center;
  }
  img {
    padding: 0.25rem 3rem;
    margin: 0;
  }
  .events {
    height: 420px;
    overflow-y: auto;
    padding: 0 1.25rem;
  }
  .controller {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  .controller button {
    margin-top: 1rem;
    cursor: pointer;
    background: red;
    border: thin solid white;
  }
  .controller button:active {
    opacity: unset;
  }
  .controller button[disabled] {
    cursor: unset;
    opacity: 0.56;
  }

  @media (hover: none) {
    .controller button {
      opacity: unset;
    }
  }
  @media screen and (min-width: 700px) {
    h1 {
      font-size: 46px;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
</style>
