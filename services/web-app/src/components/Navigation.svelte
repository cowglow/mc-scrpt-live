<script>
  import Branding from "./Branding.svelte";
</script>

<div id="navigation">
  <Branding />
  <ul>
    <li><a href="#events">EVENTS</a></li>
    <li><a href="#videos">VIDEOS</a></li>
    <li><a href="#posts">AUDIO</a></li>
    <li><a href="#tweets">CONTACT</a></li>
  </ul>
</div>

<style>
  #navigation {
    /*border: thin solid yellow;*/
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
</style>
