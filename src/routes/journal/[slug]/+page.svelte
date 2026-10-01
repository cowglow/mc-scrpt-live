<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
	$: post = data.post;
</script>

<svelte:head>
	<title>MC.SCRPT.LIVE | {post.title}</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<article class="page-wrapper">
	<a class="text-link" href="/journal">&larr; Journal</a>
	<h1>{post.title}</h1>
	{#if post.date}<time datetime={post.date}>{post.date}</time>{/if}
	<div class="post-body">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -- content is our own Markdown from src/posts -->
		{@html post.html}
	</div>
</article>

<style>
	time {
		display: block;
		font-size: 0.85rem;
		opacity: 0.7;
		margin-bottom: var(--side-padding);
	}

	.post-body :global(img) {
		max-width: 100%;
		height: auto;
	}
</style>
