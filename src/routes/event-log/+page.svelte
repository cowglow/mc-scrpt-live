<script lang="ts">
	import LogList from "$components/EventLog/LogList.svelte";
	import SectionLabel from "$components/Layout/SectionLabel.svelte";
	
	let { data } = $props();

	const yearRange = $derived(() => {
		const years = data.shows.map((s: { date: string }) => new Date(s.date).getFullYear());
		const min = String(Math.min(...years) % 100);
		const max = String(Math.max(...years) % 100);
		return `[20${min} | 20${max}]`;
	});
</script>

<div class="wrapper">
	<div style="text-align: right">
		<SectionLabel title={yearRange()} />
	</div>
	<section class="events">
		<LogList data={data.shows} />
	</section>
</div>

<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1080px;
        padding: 1rem var(--side-padding) var(--bottom-padding);
        margin: 0 auto;
    }

    .events {
        background-color: black;
        color: #ffffff;
        padding: 0 1px;
    }
</style>