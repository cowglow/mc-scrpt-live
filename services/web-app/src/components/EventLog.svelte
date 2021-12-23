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

<h1>display events</h1>
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
      <a href={event.eventLink} rel="noreferrer nofollow" target="event-link">
        {event.eventLink.replace(/^\/\/|^.*?:(\/\/)?/, "")}
      </a>
    </div>
    <div class="event-time">
      {`${new Date(event.eventDate).getUTCHours()}:00`}
    </div>
  </div>
{/each}

<div class="controller">
  <button on:click={stepBackward} disabled={!eventData.previousPage}>
    less
  </button>
  <button on:click={stepForward} disabled={!eventData.nextPage}> more </button>
</div>

<style>
  h1 {
    text-align: center;
  }

  .event,
  .controller {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
    border: thick solid greenyellow;
  }

  .event:hover {
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
  }
  .event:hover a {
    color: #ff0000;
  }

  .event div:nth-child(1) {
      border: thick solid red;
      width: 15%;
  }
  .event div:nth-child(2) {
      border: thick solid red;
      width: 37%;
  }
  .event div:nth-child(3) {
      border: thick solid red;
      width: 29%;
  }
  .event div:nth-child(4) {
      border: thick solid red;
      width: 19%;
  }


  .controller button {
    width: 40%;
    cursor: pointer;
  }
  .controller button:hover {
    background: red;
  }

  .event-date {
    /*
    display: flex;
    flex-direction: column;
    padding: 14px 50px;
    max-width: 150px;
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
      */
  }

  .event-date > span {
    width: 23px;
    height: 23px;
    font-size: 16px;
    text-align: center;
  }

  .event-name {
    /*
    border: thin solid gold;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    */

    /*max-width: 150px;*/
    /*font-family: Teko, sans-serif;*/
    /*font-style: normal;*/
    /*font-weight: 500;*/
    /*font-size: 34px;*/
  }

  .event-date,
  .event-name,
  .event-link,
  .event-time {
    border: thin solid gold;
  }

  .name {
    border: thin solid red;
  }

  .location {
    border: thin solid red;
  }

  .link {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 14px 50px;
  }

  .time {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 14px 50px;
  }
</style>
