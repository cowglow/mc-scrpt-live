<script context="module" lang="ts">
  import { browser } from "$app/env";

  export const isSubPage = () => (browser && window.location.pathname !== "/");
</script>

<script lang="ts">
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import { setContext } from "svelte";

  setContext("isSubPage", isSubPage());
</script>

<Header fullPage={isSubPage()} />
<main>
  <slot />
</main>
<Footer />
