<script lang="ts">
  export let data: Event[];
</script>

<h1>display events</h1>
{#each data as event}
  <div class="event">
    <div class="date">
      {`0${new Date(event.eventDate).getDate()}`.slice(-2)}
      <span>
        {new Date(event.eventDate).toLocaleString("default", {
          month: "short",
        })}
      </span>
    </div>
    <div class="name">{event.eventName}</div>
    <div class="link">
      <a href={event.eventLink} rel="noreferrer nofollow" target="event-link">
        {event.eventLink.replace(/^\/\/|^.*?:(\/\/)?/, "")}
      </a>
    </div>
    <div class="time">{`${new Date(event.eventDate).getUTCHours()}:00`}</div>
  </div>
{/each}

<style>
  h1 {
    text-align: center;
  }

  .event {
    display: flex;
    justify-content: space-between;
    color: #ffffff;
  }

  .event:hover {
    background-color: #ffffff;
    color: #000000;
    cursor: pointer;
  }
  .event:hover a {
    color: #ff0000;
  }

  .date {
    display: flex;
    flex-direction: column;
    padding: 14px 50px;
    max-width: 150px;
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
  }

  .date > span {
    width: 23px;
    height: 23px;
    font-size: 16px;
    text-align: center;
  }

  .name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
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
