<script lang="ts">
	import './styles.css';
	import Header from '$components/Layout/Header.svelte';
	import Footer from '$components/Layout/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
