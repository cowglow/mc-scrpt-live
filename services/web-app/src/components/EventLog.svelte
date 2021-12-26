<script lang="ts">
  import { writable } from "svelte/store";
  export let data: Event[];
  const { events } = data;
  const page = writable(1);
  const MAX_EVENT = 5;

  const filteredEvents = (list, page, max): Pagination => {
    const offset = max * (page - 1);
    const totalPages = Math.ceil(list.length / max);
    const paginatedItems = list.slice(offset, max * page);

    return {
      previousPage: page - 1 >= 0 ? page - 1 : null,
      nextPage: totalPages > page ? page + 1 : null,
      total: list.length,
      totalPages: totalPages,
      items: paginatedItems,
    };
  };

  $: eventData = filteredEvents(events, $page, MAX_EVENT);

  const stepForward = () => {
    page.set($page + 1);
  };

  const stepBackward = () => {
    page.set($page - 1);
  };
</script>

<h1>Previous Events</h1>
<h3>
  You can usually catch me grooving alongside some of the coolest DJs in and
  around the 'Mittelfranken' region.
</h3>
{#each eventData.items as event}
  <div class="event">
    <div class="event-date">
      {`0${new Date(event.eventDate).getDate()}`.slice(-2)}
      <span>
        {new Date(event.eventDate).toLocaleString("default", {
          month: "short",
        })}
      </span>
    </div>
    <div class="event-name">
      {event.eventName}
      <span>{event.eventLocation}</span>
    </div>
    <div class="event-link">
      <img src="/images/event-link-icon.svg" alt="Event link icon" />
      <a href={event.eventLink} rel="noreferrer nofollow" target="event-link">
        {event.eventLink.replace(/^\/\/|^.*?:(\/\/)?/, "")}
      </a>
    </div>
    <div class="event-time">
      <img
        src="/images/event-start-time-icon.svg"
        alt="Event Start Time icon"
      />
      {`${new Date(event.eventDate).getUTCHours()}:00`}
    </div>
  </div>
{/each}

<div class="controller">
  <button on:click={stepBackward} disabled={!eventData.previousPage}>
    <img src="/images/expand-less.svg" alt="Previous page" />
  </button>
  <button on:click={stepForward} disabled={!eventData.nextPage}>
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
    padding: 0;
    margin: 0;
  }
  .event,
  .controller {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
    color: #ffffff;
    margin-bottom: 1rem;
  }

  .event {
    margin: 0 auto;
    /*text-align: left;*/
  }

  .event:hover {
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
  }
  .event:hover a {
    color: #ff0000;
  }

  .event > * {
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.3rem;
  }
  .event div:nth-child(1) {
    width: 15%;
    /*width: 50%;*/
  }
  .event div:nth-child(2) {
    width: 85%;
    /*width: 37%;*/
    /*width: 50%;*/
  }
  .event div:nth-child(3) {
    /*width: 29%;*/
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .event div:nth-child(4) {
    width: 19%;
    display: none;
  }

  .controller button {
    margin-top: 1rem;
    cursor: pointer;
  }
  .controller button:hover {
    background: red;
  }

  /*.event-date {*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*  padding: 14px 50px;*/
  /*  max-width: 150px;*/
  /*  font-family: Teko, sans-serif;*/
  /*  font-style: normal;*/
  /*  font-weight: 500;*/
  /*  font-size: 34px;*/
  /*}*/

  /*.event-date > span {*/
  /*  width: 23px;*/
  /*  height: 23px;*/
  /*  font-size: 16px;*/
  /*  text-align: center;*/
  /*}*/

  .event-name {
  }

  @media screen and (min-width: 700px) {
    h1 {
      font-size: 46px;
    }
    h3 {
      font-size: 1.5rem;
    }
    .event div:nth-child(1) {
      width: 15%;
      /*width: 50%;*/
    }
    .event div:nth-child(2) {
      /*width: 85%;*/
      width: 37%;
      /*width: 50%;*/
      text-align: left;
    }
    .event div:nth-child(3) {
      width: 29%;
      /*width: 100%;*/
      text-align: left;
    }
    .event div:nth-child(4) {
      width: 19%;
      display: unset;
    }
  }
</style>
