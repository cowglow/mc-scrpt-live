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
			{description}
			&nbsp;&nbsp;&nbsp;
			<button on:click={() => ($locale = "en")}>EN</button>
			&nbsp;
			<button on:click={() => ($locale = "de")}>DE</button>
		</div>
		<SocialMedia />
		<p id="footer-details">
			&copy; {footerYear()}
			<a href="https://cowglow.com" rel="noreferrer nofolloer" target="_blank">COWGLOW</a>. All
			rights reserved.
			<a class="legal-link" href="/impressum">Impressum</a>
		</p>
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
		font-size: 17px;
		line-height: 20px;
		margin-bottom: 26px;
	}

	#footer-details {
		margin-top: 90px;
		font-style: normal;
		font-weight: normal;
		font-size: 1rem;
		line-height: 17px;
	}

	button {
		background: none !important;
		border: none;
		padding: 0 !important;
		/*input has OS specific font-family*/
		color: red;
		text-decoration: underline;
		cursor: pointer;
	}

	button:hover {
		text-decoration: none;
	}
</style>
