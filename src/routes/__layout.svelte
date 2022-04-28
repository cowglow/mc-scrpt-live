<script lang="ts">
import Header from "$components/Header.svelte";
import Footer from "$components/Footer.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="/styles.css" type="text/css" />
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<Header />
<main>
  <slot />
</main>
<Footer />

<style>
main {
  background-color: white;
}
</style>
