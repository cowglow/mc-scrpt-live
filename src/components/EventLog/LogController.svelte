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
		background: var(--secondary);
		border: thin solid white;
		line-height: 0;
		padding: 8px;
	}

	button:active {
		opacity: unset;
		border: thick solid white;
	}

	button[disabled] {
		border: thin solid var(--primary);
		cursor: unset;
		background-color: var(--secondary);
	}

	button[disabled] img {
		opacity: 0;
	}

	@media (hover: none) {
		button {
			opacity: unset;
		}
	}

	@media screen and (min-width: 700px) {
		button {
			padding: 18px 0 10px;
		}
	}
</style>
