<script lang="ts">
  import Navigation from "./Navigation.svelte";
  import SocialMedia from "./SocialMedia.svelte";

  const basePath: string = "/images";
  const bgCollection: string[] = [
    "background-001-min.jpg",
    "background-002-min.jpg",
  ];
  const randomIndex: number = Math.floor(Math.random() * bgCollection.length);
  const backgroundImage: string = `${basePath}/${bgCollection[randomIndex]}`;
</script>

<header style="background-image: url('{backgroundImage}')">
  <div>
    <Navigation />
    <SocialMedia />
  </div>
</header>

<style>
  header {
    padding: 10px;
    border: thin solid red;
    width: 100%;
    height: calc(81vh);
    background-position: center;
    background-repeat: no-repeat;
    background-color: black;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  div {
    border: thin solid green;
    width: 100%;
    max-width: 1080px;
    margin: 0 auto;
    color: white;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media only screen and (min-width: 600px) {
    div {
      padding: 38px;
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 1240px) {
    header {
      height: calc(97vh);
    }
  }
</style>
