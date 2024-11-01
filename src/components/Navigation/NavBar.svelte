<script lang="ts">
	import { ANCHOR_AUDIO, ANCHOR_EVENTS, ANCHOR_VIDEOS, DOWNLOAD_ROUTE } from "$lib/constants";
</script>

<ul id="navigation">
	<li><a href={`/#${ANCHOR_EVENTS}`}>EVENTS</a></li>
	<li><a href={`/#${ANCHOR_VIDEOS}`}>YOUTUBE</a></li>
	<li><a href={`/#${ANCHOR_AUDIO}`}>SOUNDCLOUD</a></li>
	<li><a href={DOWNLOAD_ROUTE}>DOWNLOADS</a></li>
</ul>

<style>
	ul#navigation {
		flex-grow: 1;
		margin: 0 auto;
		padding: 0;
		display: none;
		list-style-type: none;
	}

	ul#navigation > li {
		display: flex;
		margin-right: 13px;
	}

	ul#navigation > li a {
		color: inherit;
		padding: 0;
		margin: 0;
		text-decoration: none;
		font-size: clamp(0.42rem, 3.2vw, 2.5rem);
	}

	ul#navigation > li a:hover {
		color: red;
	}

	@media only screen and (min-width: 720px) {
		ul#navigation {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
	}

	@media only screen and (min-width: 1080px) {
		ul#navigation {
			justify-content: flex-end;
		}

		ul#navigation > li {
			margin-right: unset;
		}

		ul#navigation > li:not(:first-child) {
			margin-left: 13px;
		}
	}
</style>
