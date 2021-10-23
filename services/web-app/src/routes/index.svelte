<script lang="ts">
  import EventData from "../components/EventData.svelte";
  import MediaPlayer from "../components/MediaPlayer.svelte";
  import SectionLabel from "../components/SectionLabel.svelte";
  import SoundCloudGallery from "../components/SoundCloudGallery.svelte";
  import { ANCHOR_AUDIO, ANCHOR_EVENTS, ANCHOR_VIDEOS } from "../lib/constants";

  let hasNextEvent: boolean = Math.random() < 0.5;
</script>

<div id={ANCHOR_EVENTS} class="event-log">
  <EventData />
  <div id={ANCHOR_VIDEOS}>
    <MediaPlayer />
  </div>
</div>
<div id={ANCHOR_AUDIO} class="section">
  <SectionLabel title="SoundCloud" description="MC Scrpt Playlist" />
  <SoundCloudGallery />
</div>

<style>
  .event-log {
    background-color: black;
    color: #ffffff;
    padding: 0;
  }

  .section {
    border: thin solid red;
    width: 100%;
    max-width: 1080px;
    margin: 95px auto 83px;
  }
</style>
