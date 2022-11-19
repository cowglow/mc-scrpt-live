<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import SectionLabel from "$components/SectionLabel.svelte";
  import GdprBanner from "$components/SoundCloudPlayer/GDPR-Soundcloud-Playlist.png";

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

  let consent = false;
  const LOCAL_STORAGE_KEY = "soundcloud-consent";

  onMount(() => {
    consent = window.localStorage.getItem(LOCAL_STORAGE_KEY) === "true";
  });

  function toggleEmbeddedContent(node) {
    const handler = () => {
      window.localStorage.setItem(LOCAL_STORAGE_KEY, "true");
      consent = true;
    };

    node.addEventListener("click", handler);

    onDestroy(() => {
      node.removeEventListener("click", handler);
    });
  }

  const params: QueryObject = {
    url: "https://api.soundcloud.com/playlists/633696606",
    color: "#ff5500",
    auto_play: false,
    hide_related: false,
    show_comments: true,
    show_user: true,
    show_reposts: false,
    show_teaser: true
  };

  const query = Object.keys(params)
    .map((param) => {
      return `${encodeURIComponent(param)}=${encodeURIComponent(params[param])}`;
    })
    .join("&");
</script>

<div id="soundcloud-player">
  <SectionLabel description="MC Scrpt Playlist" title="SoundCloud" />
  {#if !consent}
    <button use:toggleEmbeddedContent>
      <img src={GdprBanner} alt="SoundCloud GDPR Consent Banner" />
    </button>
  {:else}
    <iframe
      allow="autoplay"
      height="420"
      src={`https://w.soundcloud.com/player/?${query}`}
      title="soundcloud-player-iframe"
      width="100%"></iframe>
  {/if}
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

  button {
    all: unset;
    display: flex;
    cursor: pointer;
    margin: 0;
  }

  button:focus {
    border: thick solid #F8520F;
    padding: 0;
    margin: 0;
  }

  img {
    width: 100%;
    padding: 0;
    margin: 0;
  }
</style>
