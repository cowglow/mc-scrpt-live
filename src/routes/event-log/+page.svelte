<script lang="ts">
	import LogList from "$components/EventLog/LogList.svelte";

	let { data } = $props();
</script>

<div class="wrapper">
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
        padding: 0 var(--side-padding) var(--bottom-padding);
        margin: 0 auto;
    }

    .events {
        background-color: black;
        color: #ffffff;
        padding: 0 1rem;
    }
</style>