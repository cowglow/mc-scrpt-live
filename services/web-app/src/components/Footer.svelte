<script lang="ts">
  import SocialMedia from "./SocialMedia.svelte";
  import { footerYear } from "../lib/footer-year";
</script>

<footer>
  <img src="images/logo-animation.gif" alt="mc-script-logo-animated" />
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet diam
    quis efficitur feugiat.
  </p>
  <SocialMedia />
  <p>
    &copy; {footerYear()}
    <a href="https://cowglow.com" target="_blank" rel="noreferrer nofolloer"
    >cowglow</a
    >. All rights reserved.

  </p>
</footer>
