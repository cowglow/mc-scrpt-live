<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	/*
	const currentPage = writable(1);
	const maxPages = readable(7);
	const showsData = derived([eventLogData, currentPage, maxPages], paginateContent);

	function pageForward() {
		$currentPage++;
	}

	function pageBack() {
		$currentPage--;
	 }
*/
</script>

<!--{#if $showsData.previousPage}-->
<!--	<button on:click={pageBack}> Previous Page </button>-->
<!--{/if}-->
<!--{#if $showsData.nextPage}-->
<!--	<button on:click={pageForward}> Next Page </button>-->
<!--{/if}-->

<section>
	<pre>{JSON.stringify(data, null, 2)}</pre>
</section>

<style>
	section {
		border: thin solid red;
		/*display: flex;*/
		/*flex-direction: column;*/
		/*justify-content: center;*/
		/*align-items: center;*/
		/*flex: 0.6;*/
	}
</style>
