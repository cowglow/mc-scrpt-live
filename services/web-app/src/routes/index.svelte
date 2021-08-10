<script lang="ts">
  import EventData from "../components/EventData.svelte";
  import MediaPlayer from "../components/MediaPlayer.svelte";
  import SectionLabel from "../components/SectionLabel.svelte";
  import InstagramGallery from "../components/InstagramGallery.svelte";
  import HashtagFeed from "../components/HashtagFeed.svelte";

  let hasNextEvent: boolean = Math.random() < 0.5;
</script>

<div id="event-log">
  <EventData />
  <MediaPlayer />
</div>
<div class="section">
  <SectionLabel />
  <InstagramGallery />
</div>
<div class="section">
  <SectionLabel
    title="Recent Tweets"
    description="See what’s happening around the Twitterverse"
  />
  <HashtagFeed search="mcscrpt" />
</div>

<style>
  #event-log {
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
