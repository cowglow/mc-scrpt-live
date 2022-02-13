<script lang="ts">
  import EventData from "../components/EventData.svelte";
  import MediaPlayer from "../components/MediaPlayer.svelte";
  import SectionLabel from "../components/SectionLabel.svelte";
  import SoundCloudPlaylist from "../components/SoundCloudPlaylist.svelte";
  import { ANCHOR_AUDIO, ANCHOR_EVENTS, ANCHOR_VIDEOS } from "$lib/constants";

  let hasNextEvent: true;
</script>

<div id={ANCHOR_EVENTS} class="event-data">
  <EventData />
</div>

<div id={ANCHOR_VIDEOS} class="media-player">
  <MediaPlayer />
</div>

<div id={ANCHOR_AUDIO} class="soundcloud-playlist">
  <SectionLabel title="SoundCloud" description="MC Scrpt Playlist" />
  <SoundCloudPlaylist />
</div>

<style>
  .event-data {
    background-color: black;
    color: #ffffff;
    padding: 0 var(--side-padding) var(--bottom-padding);
    margin: 0 auto;
  }

  .media-player {
    background-color: black;
  }

  .soundcloud-playlist {
    max-width: 1080px;
    padding: 0 var(--side-padding) var(--bottom-padding);
    margin: 0 auto;
  }

  @media screen and (min-width: 1080px) {
    .event-data {
      padding: 0 0 42px;
    }
    .soundcloud-playlist {
      padding: 0 0 42px;
    }
  }
</style>
