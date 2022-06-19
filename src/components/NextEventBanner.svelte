<script lang="ts">
import { getContext } from "svelte";
import CountDown from "./CountDown.svelte";

export let data: EventShow[];

const isSubPage = getContext("isSubPage");

let screenWidth;
</script>

<svelte:window bind:innerWidth="{screenWidth}" />
{#if data.reverse().length > 0}
  <div id="next-event-banner" style="{!isSubPage && `top: -40px;`}">
    <div class="title">
      <h1>Next Big Show</h1>
      <h2>{data[0].name}</h2>
      <h3>{data[0].venue}</h3>
    </div>
    <div class="count-down"><CountDown date="{new Date(data[0].date)}" /></div>
    <div class="info">
      <a href="{data[0].link}" rel="noreferrer nofollow" target="event-link">
        More Info
      </a>
    </div>
  </div>
{/if}

<style>
#next-event-banner {
  display: flex;
  flex-wrap: wrap;
  background-color: red;
  position: relative;
  align-items: center;
  flex-grow: 1;
  max-width: 1080px;
  width: 90%;
  min-height: 135px;
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
  margin: 10px auto;
}
.count-down {
  flex-grow: 1;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  right: 0;
  padding: 0;
  flex-grow: 1;
  margin: var(--side-padding) 0;
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
  color: #ffffff;
}
a {
  color: #000000;
  text-align: right;
  text-decoration: underline;
}
a:hover {
  color: #ffffff;
  text-decoration: none;
}
a:active {
  color: #fff200ff;
}
</style>
