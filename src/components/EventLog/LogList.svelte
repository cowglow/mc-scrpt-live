<script lang="ts">
    import EventLogEntry from './LogEntry.svelte';
    export let data = [];
</script>

<div class="wrapper">
    {#each data as event, index}
        <EventLogEntry {...event} />
    {/each}
</div>

<style>
    .wrapper {
        overflow-y: auto;
        border: thin solid white;
        display: flex;
        flex-direction: column;
        margin: var(--side-padding) auto;
        padding: 0;
    }

    @media screen and (max-width: 700px) {
        :root {
            --side-padding: 11px;
            --bottom-padding: 22px;
            --top-padding: 44px;
        }
    }

    @media screen and (max-width: 370px) {
        :root {
            --side-padding: 11px;
            --bottom-padding: 8px;
            --top-padding: 88px;
        }
    }
</style>
