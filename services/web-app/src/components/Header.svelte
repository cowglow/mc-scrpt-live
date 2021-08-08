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
    border: thin solid red;
    width: 100%;
    height: 720px;
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
    max-width: 1240px;
    margin: 0 auto;
    color: white;
    padding: 38px;
    display: flex;
    justify-content: space-between;
  }
</style>
