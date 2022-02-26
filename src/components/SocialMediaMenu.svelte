<script lang="ts">
import data from "../data/social-media.json";
import SocialMediaLink from "./SocialMediaLink.svelte";
import Instagram from "./SocialMedia/Instagram.svelte";
import Mixcloud from "./SocialMedia/Mixcloud.svelte";
import SoundCloud from "./SocialMedia/SoundCloud.svelte";
import Twitter from "./SocialMedia/Twitter.svelte";

const { platforms } = data;
</script>

<div id="social-media-navbar">
  <ul>
    {#each platforms as platform}
      <li>
        <SocialMediaLink bind:platform>
          {#if platform.name === "Instagram"}
            <Instagram />
          {:else if platform.name === "Mixcloud"}
            <Mixcloud />
          {:else if platform.name === "SoundCloud"}
            <SoundCloud />
          {:else if platform.name === "Twitter"}
            <Twitter />
          {/if}
        </SocialMediaLink>
      </li>
    {/each}
  </ul>
</div>

<style>
#social-media-navbar {
  margin: auto 0;
}

#social-media-navbar ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

#social-media-navbar ul > li {
  display: inline;
  margin: 0 10px;
}
</style>
