<script lang="ts">
	import type { PageData } from './$types';
	import dataLoader from '$stores/data-loader';
	import { derived, readable, writable } from 'svelte/store';
	import paginateContent from '$lib/paginate-content';
	export let data: PageData;
	const [loading, error, eventLogData] = dataLoader('/data/event-list.json');
	const currentPage = writable(1);
	const maxPages = readable(7);
	const showsData = derived([eventLogData, currentPage, maxPages], paginateContent);

	function pageForward() {
		$currentPage++;
	}

	function pageBack() {
		$currentPage--;
	}
</script>

{#if $showsData.previousPage}
	<button on:click={pageBack}> Previous Page </button>
{/if}
{#if $showsData.nextPage}
	<button on:click={pageForward}> Next Page </button>
{/if}

{#if $loading}
	Loading: {$loading}
{:else if $error}
	Error: {$error}
{:else}
	<section>
		<pre>{JSON.stringify($showsData, null, 2)}</pre>
	</section>
{/if}

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
