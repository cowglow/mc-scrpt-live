<script lang="ts">
	import SocialMediaLink from "$components/SocialMedia/Link.svelte";
	import Instagram from "$components/SocialMedia/Instagram.svelte";
	import Mixcloud from "$components/SocialMedia/Mixcloud.svelte";
	import SoundCloud from "$components/SocialMedia/SoundCloud.svelte";

	const platforms = [
		{
			name: "Instagram",
			url: "https://www.instagram.com/explore/tags/mcscrpt"
		},
		{
			name: "Mixcloud",
			url: "https://www.mixcloud.com/mcscrpt"
		},
		{
			name: "SoundCloud",
			url: "https://soundcloud.com/cowglow/sets/mc-scrpt"
		}
	];
</script>

<div id="social-media-navbar">
	<ul>
		{#each platforms as platform}
			<li>
				<SocialMediaLink bind:platform>
					{#if platform.name === "Instagram"}
						<Instagram />
					{:else if platform.name === "Mixcloud"}
						<Mixcloud />
					{:else if platform.name === "SoundCloud"}
						<SoundCloud />
					{/if}
				</SocialMediaLink>
			</li>
		{/each}
	</ul>
</div>

<style>
	#social-media-navbar {
		margin: auto 0;
	}

	#social-media-navbar ul {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	#social-media-navbar ul > li {
		display: inline;
		margin: 0 10px;
	}
</style>
