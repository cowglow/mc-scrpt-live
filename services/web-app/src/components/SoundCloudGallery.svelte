<script lang="ts">
  import * as data from "../data/soundcloud-data.json";
  const { tracks } = data;
  const baseUrl = "https://soundcloud.com";
</script>

<ul>
  {#each tracks as track}
    <li>
      <a
        href={`${baseUrl}${track.url}`}
        rel="nofollow"
        target="soundcloud"
        ><img
          src={track.image}
          alt={`Artwork for ${track.title}`}
        />{track.title}</a
      >
    </li>
  {/each}
</ul>

<style>
  a,
  a:visited {
    color: black;
  }

  a:hover,
  a:active {
    color: red;
  }

  li {
    line-height: 50px;
  }

  li img {
    border: thin solid red;
    padding: 10px;
    display: block;
  }
</style>
