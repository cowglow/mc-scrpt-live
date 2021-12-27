<script lang="ts">
  import CountDown from "./CountDown.svelte";
  export let data: Event[];
</script>

{#if data.length > 0}
  <div id="next-event-banner">
    <div class="label">
      <span>Next Big Show</span>
      <h1>{data[0].eventName}</h1>
      <span>{data[0].eventLocation}</span>
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
    flex-direction: column;
    padding: 13px;
    background-color: red;
    position: relative;
    bottom: 0;
    left: 0;
  }

  .label {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    margin-bottom: 21px;
  }

  span {
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.2rem;
    line-height: 0.75rem;
    color: #000000;
  }

  span:nth-child(1) {
    margin-top: 0.35rem;
  }

  h1 {
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: 500;
    padding: 0;
    margin: 0;
    color: #ffffff;
  }

  a {
    color: #000000;
    margin: 18px auto 0;
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
      padding: 1.5rem;
    }
    .label {
      width: unset;
      margin-bottom: unset;
    }
    span {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    h1 {
      font-size: 32px;
      line-height: 46px;
    }
    a {
      margin: 0 auto;
    }
  }
</style>
