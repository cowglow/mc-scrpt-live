<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>MC.SCRPT.LIVE | Journal</title>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<div class="page-wrapper">
	<h1>Journal</h1>
	{#if data.posts.length === 0}
		<p>Nothing here yet.</p>
	{:else}
		<ul>
			{#each data.posts as post (post.slug)}
				<li>
					<a class="text-link" href="/journal/{post.slug}">{post.title}</a>
					{#if post.date}<time datetime={post.date}>{post.date}</time>{/if}
					{#if post.summary}<p>{post.summary}</p>{/if}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	ul {
		list-style: none;
		padding: 0;
	}

	li {
		margin-bottom: var(--side-padding);
	}

	time {
		display: block;
		font-size: 0.85rem;
		opacity: 0.7;
	}
</style>
