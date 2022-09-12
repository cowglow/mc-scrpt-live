<script lang="ts">
  import SocialMedia from "$components/SocialMediaMenu.svelte";
  import Branding from "$components/Branding.svelte";
  import { footerYear } from "$lib/footer-year";
</script>

<footer>
  <div>
    <Branding />
    <p id="footer-description">
      Available for booking and collaboration.
      <br />
      Feel free to contact me.
      <br />
    </p>
    <SocialMedia />
    <p id="footer-details">
      &copy; {footerYear()}
      <a href="https://cowglow.com" rel="noreferrer nofolloer" target="_blank">COWGLOW</a>. All
      rights reserved.
      <a class="legal-link" href="/impressum">Impressum</a>
    </p>
  </div>
</footer>

<style>
  footer {
    width: 100%;
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
    line-height: 20px;
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
