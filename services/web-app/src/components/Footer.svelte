<script lang="ts">
  import SocialMedia from "./SocialMediaMenu.svelte";
  import { footerYear } from "../lib/footer-year";
  import Branding from "./Branding.svelte";
</script>

<footer>
  <div>
    <Branding />
    <p id="footer-description">
      You can usually catch me grooving alongside the coolest DJs in and around
      the 'Mittelfranken' region.
      <br /><br />
      Feel free to contact me.
    </p>
    <SocialMedia />
    <p id="footer-details">
      &copy; {footerYear()}
      <a href="https://cowglow.com" target="_blank" rel="noreferrer nofolloer"
        >COWGLOW</a
      >. All rights reserved.
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
    width: 200px;
    font-size: 17px;
    line-height: 17pt;
    margin-bottom: 26px;
  }

  #footer-details {
    margin-top: 45px;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 17px;
  }
</style>
