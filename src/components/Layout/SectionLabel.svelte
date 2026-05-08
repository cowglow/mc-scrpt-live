<script lang="ts">
	export let title = "Section Label";
	export let description: string | undefined;
</script>

<h3>{title}</h3>
{#if description}<div class="section-label-desc">{description}</div>{/if}

<style>
	h3 {
		font-family: var(--font-heading), sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 2.0625rem;
		line-height: 1.42;
		margin: var(--side-padding) auto 0;
		padding: 0;
	}

	.section-label-desc {
		font-family: var(--font-body), sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 1.5rem;
		line-height: 1.2;
		color: #666666;
		margin-bottom: calc(var(--side-padding) * 0.5);
	}
</style>
