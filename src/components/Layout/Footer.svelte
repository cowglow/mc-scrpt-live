<script lang="ts">
	import translations, { locale } from "$stores/i18n-store";
	import SocialMedia from "$components/SocialMedia/Menu.svelte";
	import Branding from "$components/Branding.svelte";
	import { footerYear } from "$lib/footer-year";

	$: description = $translations["footer.message"];
</script>

<footer>
	<div>
		<Branding style="display: inline-block" />

		<div id="footer-description">
			<p>{description}</p>
			<SocialMedia />
		</div>

		<div id="footer-details">
			<p>
				&copy; {footerYear()}
				<a href="https://cowglow.com" rel="noreferrer nofolloer" target="_blank">COWGLOW</a>. All
				rights reserved.
				<a class="legal-link" href="/impressum">Impressum</a>
			</p>
			<p>
				{#if $locale !== "en"}
					<button on:click={() => ($locale = "en")}>ENGLISH</button>
				{/if}
				{#if $locale !== "de"}
					<button on:click={() => ($locale = "de")}>GERMAN</button>
				{/if}
			</p>
		</div>
	</div>
</footer>

<style>
	footer {
		width: 100%;
		background-color: black;
		display: flex;
		flex-direction: column;
		color: white;
		padding: 38px;
	}

	div {
		width: 100%;
		max-width: 1080px;
		margin: 0 auto;
	}

	a {
		text-decoration: none;
	}

	#footer-description {
		display: flex;
		flex-wrap: wrap-reverse;
		justify-content: space-between;
	}

	#footer-details {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap-reverse;
		margin-top: 90px;
		font-style: normal;
		font-weight: normal;
		font-size: 1rem;
		line-height: 17px;
	}

	button {
		background: none !important;
		border: none;
		/*padding: 0 !important;*/
		/*input has OS specific font-family*/
		color: white;
		text-decoration: underline;
		cursor: pointer;
	}

	button:hover {
		text-decoration: none;
	}
</style>
