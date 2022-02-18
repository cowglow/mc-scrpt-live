<script context="module">
  /** @type {import("@sveltejs/kit").Load} */
  export function load({ page }) {
    const { path } = page;
    return {
      props: {
        subPage: path !== "/"
      }
    };
  }
</script>
<script lang="ts">
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  export let subPage = false;
</script>

<Header fullPage={subPage} />
<main>
  <slot />
</main>
<Footer />
