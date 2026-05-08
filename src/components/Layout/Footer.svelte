<script lang="ts">
	import translations, { locale } from "$stores/i18n-store";
	import SocialMedia from "$components/SocialMedia/Menu.svelte";
	import Branding from "$components/Branding.svelte";
	import { footerYear } from "$lib/footer-year";

	$: description = $translations["footer.message"];
	$: subscribe = $translations["footer.subscribe"];
	$: rights = $translations["footer.rights"];
	$: langEn = $translations["footer.language.en"];
	$: langDe = $translations["footer.language.de"];
</script>

<footer>
	<div>
		<Branding style="display: inline-block" />

		<div id="footer-description">
			<SocialMedia />
			<p>{description}</p>
			<div id="footer-details">
				<p><a class="legal-link" href="/impressum">Impressum</a></p>
				<p><a class="legal-link" href="/calendar.ics">{subscribe}</a></p>
				<p class="language-toggle">
					<svg class="language-icon" aria-label="Language" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
						<path d="M12 2C9.5 5 8 8.5 8 12C8 15.5 9.5 19 12 22" stroke="currentColor" stroke-width="1.5"/>
						<path d="M12 2C14.5 5 16 8.5 16 12C16 15.5 14.5 19 12 22" stroke="currentColor" stroke-width="1.5"/>
						<path d="M2 12H22" stroke="currentColor" stroke-width="1.5"/>
						<path d="M3.5 7.5H20.5" stroke="currentColor" stroke-width="1.5"/>
						<path d="M3.5 16.5H20.5" stroke="currentColor" stroke-width="1.5"/>
					</svg>
					{#if $locale !== "en"}
						<button class="legal-link" on:click={() => ($locale = "en")}>{langEn}</button>
					{/if}
					{#if $locale !== "de"}
						<button class="legal-link" on:click={() => ($locale = "de")}>{langDe}</button>
					{/if}
				</p>
			</div>
		</div>

		<p>
			&copy; {footerYear()}
			<a href="https://cowglow.com" rel="noreferrer nofolloer" target="_blank">COWGLOW</a>. {rights}
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
        padding: var(--side-padding);
    }

    footer :global(#brand) {
        font-size: clamp(1.8rem, 5vw, 3rem);
    }

    @media screen and (min-width: 700px) {
        footer {
            padding: 38px;
        }
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
        flex-direction: column;
        flex-wrap: wrap-reverse;
        justify-content: space-between;
        padding-top: var(--side-padding);
    }

    #footer-details {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.5;
        margin-top: var(--bottom-padding);

        p {
            margin: 0;
        }
    }

    .legal-link {
        text-decoration: underline;
    }

    .legal-link:hover {
        color: red;
        text-decoration: none;
    }

    .language-toggle {
        margin-top: 16px;
    }

    .language-icon {
        width: 1em;
        height: 1em;
        vertical-align: middle;
        margin-right: 4px;
    }

    button {
        background: none;
        border: none;
        color: inherit;
        padding: 0;
        font-size: inherit;
        font-family: inherit;
        cursor: pointer;
    }
</style>
