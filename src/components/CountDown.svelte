<script lang="ts">
  import { onDestroy } from "svelte";
  import { getTimeDifference } from "$lib/get-time-difference";

  export let date: Date = new Date(Date.now());
  let diff = getTimeDifference(date);

  let interval = setInterval(() => {
    diff = getTimeDifference(date);
  }, 1000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="wrapper">
  <div class="container">{`0${diff.days}`.slice(-2)}<span>Days</span></div>
  <div class="container">{`0${diff.hours}`.slice(-2)}<span>Hrs</span></div>
  <div class="container">{`0${diff.minutes}`.slice(-2)}<span>Min</span></div>
  <div class="container">{`0${diff.seconds}`.slice(-2)}<span>Secs</span></div>
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 276px;
    gap: 10px;
  }

  .container {
    border: thin solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 53px;
    height: 59px;
    background-color: white;
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    color: #000000;
    padding: 0;
    margin: 0;
  }

  span {
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    text-align: center;
    color: #000000;
  }

  @media screen and (min-width: 700px) {
    div {
      margin: 0 auto;
    }
  }
</style>
