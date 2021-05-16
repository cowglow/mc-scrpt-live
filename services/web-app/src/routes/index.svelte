<script lang="ts">
  import Hero from "../components/Hero.svelte";
  import NextEventBanner from "../components/NextEventBanner.svelte";
  import EventLog from "../components/EventLog.svelte";
  import MediaPlayer from "../components/MediaPlayer.svelte";
  import InstagramGallery from "../components/InstagramGallery.svelte";
  import HashtagFeed from "../components/HashtagFeed.svelte";

  let hasNextEvent: boolean = Math.random() < 0.5;
</script>

<Hero />
<NextEventBanner active={hasNextEvent} />
<EventLog />
<MediaPlayer />
<InstagramGallery />
<HashtagFeed search="mcscrpt" />
