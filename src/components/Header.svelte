<script lang="ts">
import Branding from "./Branding.svelte";
import Navigation from "./Navigation.svelte";
import SocialMedia from "./SocialMediaMenu.svelte";
</script>

<header>
  <div id="nav-bar-wrapper">
    <div id="nav-bar">
      <Branding />
      <Navigation />
      <SocialMedia />
    </div>
  </div>
</header>

<style>
header {
  width: 100%;
  height: calc(42vh);
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: black;
  background-image: url("/images/background-min.jpg");
}

#nav-bar-wrapper {
  background-color: rgba(0, 0, 0, 0.5);
  height: 90px;
}

#nav-bar {
  width: 100%;
  height: 100%;
  max-width: 1080px;
  margin: 0 auto;
  color: white;
  padding: 0 var(--side-padding);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

@media only screen and (min-width: 600px) {
  #nav-bar {
    padding: 10px 38px 12px;
    flex-direction: row;
  }

  header {
    height: calc(64vh);
  }
}

@media only screen and (min-width: 1024px) {
  header {
    height: calc(81vh);
    background-position: center;
  }
}
</style>
