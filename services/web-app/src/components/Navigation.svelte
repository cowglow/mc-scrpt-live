<script lang="ts">
  import { ANCHOR_AUDIO, ANCHOR_EVENTS, ANCHOR_VIDEOS } from "$lib/constants";
</script>

<div id="navigation">
  <ul>
    <li><a href={`/#${ANCHOR_EVENTS}`}>EVENTS</a></li>
    <li><a href={`/#${ANCHOR_VIDEOS}`}>VIDEOS</a></li>
    <li><a href={`/#${ANCHOR_AUDIO}`}>AUDIO</a></li>
  </ul>
</div>

<style>
  #navigation {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    #navigation {
      display: block;
      margin: auto 0;
    }

    #navigation ul {
      display: inline-block;
      margin: 0;
      padding: 0;
      list-style: none;
      text-align: center;
    }

    #navigation ul > li {
      display: inline;
      margin-right: 13px;
    }

    #navigation ul > li:last-child {
      margin-right: unset;
    }

    #navigation ul > li a {
      text-decoration: none;
    }
  }
</style>
