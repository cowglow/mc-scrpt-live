<script lang="ts">
	export let stepForward: () => void;
	export let stepBackward: () => void;
	export let stepBackwardDisabled = true;
	export let stepForwardDisabled = true;
</script>

<div class="wrapper">
	<button on:click={stepBackward} disabled={stepBackwardDisabled}>
		<img src="/images/expand-less.svg" alt="Previous page" />
	</button>
	<button on:click={stepForward} disabled={stepForwardDisabled}>
		<img src="images/expand-more.svg" alt="Next page" />
	</button>
</div>

<style>
	.wrapper {
		display: flex;
		justify-content: space-around;
		padding: 0;
		margin: 0 auto;
	}

	button {
		flex: 1;
		cursor: pointer;
		background-color: var(--secondary);
		border: thin solid white;
		line-height: 0;
		padding: 8px;
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
		fill: var(--active);
	}

	@media screen and (min-width: 700px) {
		button {
			padding: 18px 0 10px;
		}
	}
</style>
