<script lang="ts">
	export let pageTitle = false;
</script>

{#if pageTitle}
	<h1 class="brand-heading">
		<a id="brand" href="/">MC SCRPT</a>
	</h1>
{:else}
	<a id="brand" href="/">MC SCRPT</a>
{/if}

<style>
    a#brand {
        font-family: var(--font-brand), sans-serif;
        line-height: var(--floating-clamp);
        flex: 1;
        display: flex;
        text-decoration: none;
        font-size: 0.66em;
        text-wrap: nowrap;
    }

    a#brand:hover {
        color: red;
    }

    a#brand:active {
        color: #fff200ff;
    }

    .brand-heading {
        flex: 1;
        display: flex;
        margin: 0;
        padding: 0;
        font-size: inherit;
    }

    @media only screen and (min-width: 840px) {
        a#brand {
            font-size: unset;
        }
    }
</style>