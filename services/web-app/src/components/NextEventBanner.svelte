<script lang="ts">
  import CountDown from "./CountDown.svelte";
  export let data: Event[];
</script>

{#if data.length > 0}
  <div id="next-event-banner">
    <div class="label">
      <span>Next Big Show</span>
      <h1>{data[0].eventName}</h1>
    </div>
    <CountDown date={new Date(data[0].eventDate)} />
    <a href={data[0].eventLink} rel="noreferrer nofollow" target="event-link">
      More Info
    </a>
  </div>
{/if}

<style>
  #next-event-banner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 134.99px;
    max-width: 1080px;
    margin: 0 auto;
    background-color: red;
    position: relative;
    top: -40px;
  }

  .label {
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  span {
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 21px;
    color: #000000;
  }

  h1 {
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 46px;
    padding: 0;
    margin: 0;
    color: #ffffff;
  }

  a {
    color: #000000;
  }
  a:hover {
    color: #ffffff;
    text-decoration: underline;
  }
</style>
