<script lang="ts">
	import type { PageData } from './$types';
	import EventLogController from '$components/EventLogController.svelte';
	import dataLoader from '$stores/data-loader';
	import { derived, readable, writable } from 'svelte/store';
	import paginateContent from '$lib/paginate-content';
	import { JSON_PATH, MAX_EVENT_ITEMS } from '$lib/constants';

	export let data: PageData;

	let spawned = true;
	const eventShowData = writable(data.data);
	const currentPage = writable(1);
	const maxPages = readable(MAX_EVENT_ITEMS);
	const totalPages = readable(data.total);
	const shows = derived([eventShowData, currentPage, maxPages, totalPages], paginateContent);

	async function loadEventData() {
		const { events } = await dataLoader(JSON_PATH, fetch);
		return events;
	}
	async function onStepBackward() {
		if (spawned) {
			$eventShowData = await loadEventData();
			spawned = false;
		}
		$currentPage--;
	}
	async function onStepForward() {
		if (spawned) {
			$eventShowData = await loadEventData();
			spawned = false;
		}
		$currentPage++;
	}
</script>

<EventLogController
	stepBackward={onStepBackward}
	stepForward={onStepForward}
	stepBackwardDisabled={!$shows.previousPage}
	stepForwardDisabled={!$shows.nextPage}
/>
<pre>{JSON.stringify($shows, null, 2)}</pre>

<style>
	section {
		display: flex;
	}

	a {
		padding: 0.23em 1em;
		border: thick solid var(--color-theme-1);
		text-decoration: none;
	}
	a:hover {
		background-color: var(--color-theme-1);
		border: thick solid var(--color-theme-2);
		color: var(--color-text);
		text-decoration: none;
	}
</style>
