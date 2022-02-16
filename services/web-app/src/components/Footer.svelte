<script lang="ts">
  import SocialMedia from "./SocialMediaMenu.svelte";
  import Branding from "./Branding.svelte";
  import { footerYear } from "$lib/footer-year";
</script>

<footer>
  <div>
    <Branding />
    <p id="footer-description">
      You can catch live in the 'Mittelfranken' region.
      <br /><br />
      Feel free to contact me.
    </p>
    <SocialMedia />
    <p id="footer-details">
      &copy; {footerYear()}
      <a href="https://cowglow.com" target="_blank" rel="noreferrer nofolloer"
        >COWGLOW</a
      >. All rights reserved.
      <a href="/impressum" class="legal-link">Impressum</a>
    </p>
  </div>
</footer>

<style>
  footer {
    width: 100%;
    height: 400px;
    background-color: black;
    display: flex;
    flex-direction: column;
    color: white;
    padding: 38px;
  }

  div {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
  }

  #footer-description {
    font-size: 17px;
    line-height: 17px;
    margin-bottom: 26px;
  }

  #footer-details {
    margin-top: 90px;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 17px;
  }
</style>
