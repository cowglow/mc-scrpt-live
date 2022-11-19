<script lang="ts">
  import { ANCHOR_AUDIO, ANCHOR_EVENTS, ANCHOR_VIDEOS } from "$lib/constants";
  import EventLog from "$components/EventLog.svelte";
  import MediaPlayer from "$components/MediaPlayer/MediaPlayer.svelte";
  import SoundCloudPlayer from "$components/SoundCloudPlayer/SoundCloudPlayer.svelte";
</script>

<svelte:head>
  <title>MC.SCRPT.LIVE | Drum and Bass MC</title>
</svelte:head>

<div class="anchor-off-set" id={ANCHOR_EVENTS} />
<div class="events">
  <EventLog />
</div>

<div class="videos" id={ANCHOR_VIDEOS}>
  <MediaPlayer />
</div>

<div class="audio" id={ANCHOR_AUDIO}>
  <SoundCloudPlayer />
</div>

<style>
  .anchor-off-set {
    position: relative;
    top: -40px;
  }

  .events {
    background-color: black;
    color: #ffffff;
    padding: 0;
  }

  .videos {
    background-color: black;
    color: #ffffff;
    padding: var(--side-padding);
  }

  .audio {
    width: 100%;
    max-width: 1080px;
    padding: var(--side-padding);
    margin: 0 auto;
  }

  @media screen and (min-width: 1080px) {
    .events {
      padding: 0 0 42px;
    }

    .audio {
      padding: 0 0 42px;
    }
  }
</style>
