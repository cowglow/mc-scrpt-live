<script lang="ts">
	import { onMount } from 'svelte';
	import Header from "$components/Layout/Header.svelte";
	import Footer from "$components/Layout/Footer.svelte";

	onMount(() => {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.addEventListener('message', (e) => {
				if (e.data?.type === 'SW_UPDATED') location.reload();
			});
		}
	});
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
