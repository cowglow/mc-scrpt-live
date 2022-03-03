<script lang="ts">
import Header from "$components/Header.svelte";
import Footer from "$components/Footer.svelte";
</script>

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
