<script lang="ts">
  import { ANCHOR_AUDIO, ANCHOR_EVENTS, ANCHOR_VIDEOS } from "$lib/constants";
  import EventLog from "../components/EventLog.svelte";
  import MediaPlayer from "../components/MediaPlayer.svelte";
  import SoundcloudPlaylist from "../components/SoundcloudPlaylist.svelte";
</script>

<div id="{ANCHOR_EVENTS}" class="events">
  <EventLog />
</div>

<div id="{ANCHOR_VIDEOS}" class="videos">
   <MediaPlayer />
</div>

<div id="{ANCHOR_AUDIO}" class="audio">
   <SoundcloudPlaylist />
</div>

<style>
  .events {
    background-color: black;
    color: #ffffff;
    padding: 0;
  }
  .videos {
    background-color: black;
    color: #ffffff;
  }
  .audio {
    width: 100%;
    max-width: 1080px;
    padding: 0 var(--side-padding) var(--bottom-padding);
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
