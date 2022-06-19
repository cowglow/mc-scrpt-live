<script lang="ts">
import { onDestroy } from "svelte";

export let date: Date = new Date(Date.now());

let currentDate = new Date(Date.now());
let count, d, h, m, s: number;

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

<div class="wrapper">
  <div class="container">{`0${d}`.slice(-2)}<span>Days</span></div>
  <div class="container">{`0${h}`.slice(-2)}<span>Hrs</span></div>
  <div class="container">{`0${m}`.slice(-2)}<span>Min</span></div>
  <div class="container">{`0${s}`.slice(-2)}<span>Secs</span></div>
</div>

<style>
.wrapper {
  border: 10px solid red;
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
