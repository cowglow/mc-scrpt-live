<script lang="ts">
  import CountDown from "./CountDown.svelte";
  export let data: ShowData[];
  let screenWidth;
</script>

<svelte:window bind:innerWidth={screenWidth} />
{#if data.length > 0}
  <div id="next-event-banner">
    <div class="title">
      <h1>Next Big Show</h1>
      <h2>{data[0].eventName}</h2>
      <h3>{data[0].eventLocation}</h3>
    </div>
    {#if screenWidth > 699}
      <CountDown date={new Date(data[0].eventDate)} />
    {/if}
    <div class="info">
      <a href={data[0].eventLink} rel="noreferrer nofollow" target="event-link">
        More Info
      </a>
    </div>
  </div>
{/if}

<style>
  #next-event-banner {
    overflow: hidden;
    display: flex;
    background-color: red;
    position: relative;
    width: 100%;
    max-width: 1080px;
    height: 135px;
    margin: 0 auto;
    padding: 0 var(--side-padding);
    z-index: 1;
  }
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-grow: 1;
    padding: 0;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    margin: 21px 0 21px 21px;
    padding: 0;
  }
  h1 {
    font-family: Teko, sans-serif;
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: 21px;
    padding: 0;
    margin: 0.35rem 0 0;
    color: #000000;
  }
  h2 {
    padding: 0;
    margin: 0;
    font-family: Teko, sans-serif;
    font-size: 38px;
    font-style: normal;
    font-weight: 500;
    line-height: 46px;
    display: flex;
    align-items: flex-end;
    color: #ffffff;
  }
  h3 {
    padding: 0;
    margin: 0;
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 21px;
    line-height: 21px;
    color: #000000;
  }
  a {
    color: #000000;
    text-align: right;
  }
  a:hover {
    color: #ffffff;
    text-decoration: underline;
  }
  a:active {
    color: #fff200ff;
  }
  @media screen and (min-width: 700px) {
    #next-event-banner {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      top: -40px;
    }
    .title {
      flex-grow: 1;
    }
    .info {
      flex-grow: 0;
    }
    h1,
    h3 {
      font-size: 24px;
    }
    h2 {
      font-size: 42px;
    }
  }
  @media screen and (min-width: 1080px) {
    .title {
      flex-grow: 1;
    }
    .info {
      flex-grow: 1;
    }
  }
</style>
