<script lang="ts">
  import { scrollToView } from "legacy/src/lib/scroll-to-view";

  const DRY_MIX = "DRY%20MC%20SCRPT%20-%20Vocal%20Sample%20Pack%20-%202022";
  const WASILLI_MIX = "ILL.I.SAW%20WET%20MIX%20-%20Vocal%20Sample%20Pack%20-%202022";
</script>

<svelte:head>
  <title>MC.SCRPT.LIVE | Downloads</title>
</svelte:head>
<div id="download" class="wrapper" use:scrollToView>
  <h1>2022 Sound Pack</h1>
  <p>
    If you plan on using or have used these audio tacks, please read the following. First off, I
    really appreciate anyone who downloads these audio track and shares it with their producer
    friends! With that being said, credit would be much appreciated. It would mean the world to me!
  </p>
  <ul>
    <li>
      <a class="text-link" href={`/downloads/${DRY_MIX}.zip`}>Download</a> Dry Mix
    </li>
    <li>
      <a class="text-link" href={`/downloads/${WASILLI_MIX}.zip`}>Download</a>
      ill.i.saw Mix
    </li>
    <!--    <li><a href="#">Download</a> Al Gee</li>-->
  </ul>
</div>

<style>
  li {
    line-height: var(--bottom-padding);
  }
</style>
