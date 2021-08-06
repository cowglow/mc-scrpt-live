<script lang="ts">
  import SocialMedia from "./SocialMedia.svelte";
  import { footerYear } from "../lib/footer-year";
</script>

<footer>
  <div>
    <p id="brand">MC SCRPT</p>
    <p id="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet diam
      quis efficitur feugiat.
    </p>
    <SocialMedia />
    <p id="footer-details">
      &copy; {footerYear()}
      <a href="https://cowglow.com" target="_blank" rel="noreferrer nofolloer"
        >cowglow</a
      >. All rights reserved.
    </p>
  </div>
</footer>

<style>
  footer {
    border: thin solid red;
    width: 100%;
    height: 400px;
    background-color: black;
    display: flex;
    flex-direction: column;
    color: white;
  }

  div {
    border: thin solid green;
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
  }

  #brand {
    border: thin solid red;
    font-family: "bd_console", sans-serif;
    width: 135px;
  }

  #description {
    width: 200px;
    font-size: 0.75rem;
    line-height: 17pt;
    margin-bottom: 26px;
  }

  #footer-details {
    border: thin solid red;
    margin-top: 45px;
  }
</style>
