<script lang="ts">
  import { onDestroy } from "svelte";
  export let date: Date;
  let currentDate = new Date(Date.now());

  $: count = Math.round((date - currentDate) / 1000);
  $: d = Math.floor(count / (3600 * 24));
  $: h = Math.floor(count / 3600);
  $: m = Math.floor((count - h * 3600) / 60);
  $: s = count - h * 3600 - m * 60;

  let interval = setInterval(() => {
    currentDate = new Date(Date.now());
  }, 1000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div>
  <p>{`0${d}`.slice(-2)}<span>Days</span></p>
  <p>{`0${h}`.slice(-2)}<span>Hrs</span></p>
  <p>{`0${m}`.slice(-2)}<span>Min</span></p>
  <p>{`0${s}`.slice(-2)}<span>Secs</span></p>
</div>

<style>
  div {
    display: flex;
    margin: 0 auto;
  }
  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background-color: white;
    width: 53px;
    height: 59px;
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    text-align: center;
    color: #000000;
    margin: 0 21px;
  }
  span {
    font-family: Teko, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    /*line-height: 23px;*/
    text-align: center;
    color: #000000;
  }
</style>
