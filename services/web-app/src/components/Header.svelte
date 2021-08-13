<script lang="ts">
  import Branding from "./Branding.svelte";
  import Navigation from "./Navigation.svelte";
  import SocialMedia from "./SocialMediaMenu.svelte";

  const basePath: string = "/images";
  const bgCollection: string[] = [
    "background-001-min.jpg",
    "background-002-min.jpg",
  ];
  const randomIndex: number = Math.floor(Math.random() * bgCollection.length);
  const backgroundImage: string = `${basePath}/${bgCollection[randomIndex]}`;
</script>

<header style="background-image: url('{backgroundImage}')">
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
    border: thin solid red;
    width: 100%;
    height: calc(81vh);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #nav-bar-wrapper {
    background-color: rgba(0, 0, 0, 0.5);
  }

  #nav-bar {
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    color: white;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media only screen and (min-width: 600px) {
    #nav-bar {
      padding: 10px 38px 12px;
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 1240px) {
    header {
      height: calc(97vh);
    }
  }
</style>
