<script lang="ts">
	import translations from "$stores/i18n-store";

	export let stepForward: () => void;
	export let stepBackward: () => void;
	export let stepBackwardDisabled = true;
	export let stepForwardDisabled = true;

	$: labelPrevious = $translations["pagination.previous"];
	$: labelNext = $translations["pagination.next"];
</script>

<div role="tablist" class="wrapper">
	<button
		role="tab"
		on:click={stepBackward}
		disabled={stepBackwardDisabled}
		aria-label={labelPrevious}
		aria-selected="false"
	>
		<img src="/images/expand-less.svg" alt="" role="presentation" />
	</button>
	<button
		role="tab"
		on:click={stepForward}
		disabled={stepForwardDisabled}
		aria-label={labelNext}
		aria-selected="false"
	>
		<img src="/images/expand-more.svg" alt="" role="presentation" />
	</button>
</div>

<style>
	.wrapper {
		display: flex;
		width: 100%;
		padding: 0;
		margin: 0 auto;
	}

	button {
		flex: 1;
		cursor: pointer;
		background-color: var(--secondary);
		border: thin solid white;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		min-width: 44px;
		min-height: 44px;
	}

	button:focus-visible {
		outline: 2px solid white;
		outline-offset: -4px;
	}

	button:active {
		border-color: var(--active);
	}

	button[disabled] {
		border-color: var(--secondary);
		cursor: unset;
	}

	button[disabled] img {
		mix-blend-mode: soft-light;
	}
</style>