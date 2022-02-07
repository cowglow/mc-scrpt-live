<script>
  export let event;
</script>

<div class="event">
  <div class="event-date">
    <span>{`0${new Date(event.eventDate).getDate()}`.slice(-2)}</span>
    <span>
      {new Date(event.eventDate).toLocaleString("default", {
        month: "short",
      })}
    </span>
    <span>{`${new Date(event.eventDate).getUTCFullYear()}`}</span>
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
    <img src="/images/event-start-time-icon.svg" alt="Event Start Time icon" />
    {`${new Date(event.eventDate).getUTCHours()}:00`}
  </div>
</div>

<style>
  div {
    border: thin solid yellow;
  }
  .event {
    display: flex;
    height: 82px;
  }
  /*.event:nth-child(even) {*/
  /*  color: white;*/
  /*  background-color: black;*/
  /*}*/
  /*.event:nth-child(odd) {*/
  /*  color: black;*/
  /*  background-color: white;*/
  /*}*/
  /*.event:hover:nth-child(odd) {*/
  /*  background-color: white;*/
  /*  color: black;*/
  /*}*/
  /*.event:hover:nth-child(even) {*/
  /*  background-color: black;*/
  /*  color: white;*/
  /*}*/
  /*.event:hover a:nth-child(odd) {*/
  /*  color: #ff0000;*/
  /*}*/

  /*.event div:nth-child(1) {*/
  /*  text-align: center;*/
  /*  width: 15%;*/
  /*  !*width: 50%;*!*/
  /*}*/
  /*.event div:nth-child(2) {*/
  /*  width: 85%;*/
  /*  !*width: 37%;*!*/
  /*  !*width: 50%;*!*/
  /*}*/
  /*.event div:nth-child(3) {*/
  /*  !*width: 29%;*!*/
  /*  width: 100%;*/
  /*  white-space: nowrap;*/
  /*  overflow: hidden;*/
  /*  text-overflow: ellipsis;*/
  /*  text-align: center;*/
  /*  display: none;*/
  /*}*/
  /*.event div:nth-child(4) {*/
  /*  width: 19%;*/
  /*  display: none;*/
  /*}*/

  /*.event-date {*/
  /*  display: flex;*/
  /*  flex-direction: column;*/
  /*}*/
  /*.event-date span:nth-child(1) {*/
  /*  border: thin solid red;*/
  /*font-size: 1.8rem;*/
  /*}*/
  /*.event-date span:nth-child(2) {*/
  /*  border: thin solid red;*/
  /*  font-size: 2.25rem;*/
  /*}*/
  /*.event-date span:nth-child(3) {*/
  /*  border: thin solid red;*/
  /*display: none;*/
  /*}*/

  @media screen and (min-width: 700px) {
  }
</style>
