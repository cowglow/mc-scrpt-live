<script lang="ts">
  import SectionLabel from "../components/SectionLabel.svelte";

  const baseUrl = "https://w.soundcloud.com/player/";

  type QueryObject = {
    url: string;
    color: string;
    auto_play: boolean;
    hide_related: boolean;
    show_comments: boolean;
    show_user: boolean;
    show_reposts: boolean;
    show_teaser: boolean;
  };

  const params: QueryObject = {
    url: "https://api.soundcloud.com/playlists/633696606",
    color: "#ff5500",
    auto_play: false,
    hide_related: false,
    show_comments: true,
    show_user: true,
    show_reposts: false,
    show_teaser: true,
  };

  const query = Object.keys(params)
    .map((param) => {
      return `${encodeURIComponent(param)}=${encodeURIComponent(
        params[param]
      )}`;
    })
    .join("&");
</script>

<div id="soundcloud-player">
  <SectionLabel title="SoundCloud" description="MC Scrpt Playlist" />
  <iframe
    title="soundcloud-player-iframe"
    width="100%"
    height="420"
    allow="autoplay"
    src={`${baseUrl}?${query}`}></iframe>
</div>

<style>
  #soundcloud-player {
    overflow: hidden;
    position: relative;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }
  #soundcloud-player::after {
    display: block;
    content: "";
  }
  #soundcloud-player iframe {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 420px;
  }
</style>
