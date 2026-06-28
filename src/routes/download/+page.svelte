<script lang="ts">
	const DRY_MIX_2022 = "DRY%20MC%20SCRPT%20-%20Vocal%20Sample%20Pack%20-%202022";
	const DRY_MIX_2023 = "DRY%20MC%20SCRPT%20-%20Vocal%20Sample%20Pack%20-%202023";
	const WASILLI_MIX = "ILL.I.SAW%20WET%20MIX%20-%20Vocal%20Sample%20Pack%20-%202022";
	const EPK = "MC%20Scrpt%20EPK";
	const CANVA_EMBED = "https://www.canva.com/design/DAHEywanYKM/0xlwWiGOuucgUulcHJfwfw/view?embed";
	const CANVA_LINK = "https://www.canva.com/design/DAHEywanYKM/0xlwWiGOuucgUulcHJfwfw/view";

	let dialog = $state<HTMLDialogElement | null>(null);
	let presentationLoaded = $state(false);

	function openPresentation() {
		dialog?.showModal();
	}

	function onDialogClose() {
		presentationLoaded = false;
	}
</script>

<svelte:head>
	<title>MC.SCRPT.LIVE | Downloads</title>
</svelte:head>

<div id="download" class="page-wrapper">
	<h1>Downloads</h1>
	<h2>Press Kit</h2>
	<ul>
		<li>
			<button class="text-link presentation-btn" onclick={openPresentation}>
				Quick Intro Presentation
			</button>
			[<a class="text-link" href={CANVA_LINK} target="_blank" rel="noreferrer nofollow">Canva</a>]
		</li>
		<li>
			Hi-Res Photo <a class="text-link" href={`/downloads/${EPK}.zip`} target="_blank">Download Kit</a> [Zip]
		</li>
	</ul>
	<h2>Releases</h2>
	<ul>
		<li>
			Kontrolfreek by <a
			class="text-link"
			href="https://www.instagram.com/ill_i_saw/"
			rel="noreferrer nofollow"
			target="_blank">ill.i.saw</a
		>. Available on
			<a
				class="text-link"
				href="https://on.soundcloud.com/g5gtswzcyiafsAmt5"
				rel="noreferrer nofollow"
				target="_blank">SoundCloud</a
			>
		</li>
		<li>
			Can't Let Go by <a
			class="text-link"
			href="https://www.instagram.com/al_gee_dnb/"
			rel="noreferrer nofollow"
			target="_blank">Al Gee</a
		>. Available on
			<a
				class="text-link"
				href="https://liquidbrilliants.bandcamp.com/album/cant-let-go"
				rel="noreferrer nofollow"
				target="_blank">Liquid Brilliants</a
			>.
		</li>
	</ul>
	<p>More music scheduled to release later this year.</p>
	<h2>Sound Packs</h2>
	<ul>
		<li>
			2023 - Recorded by <a
			class="text-link"
			href="https://www.instagram.com/salveshamlic/"
			rel="noreferrer nofollow"
			target="_blank"
		>Salve Shamlic</a
		>
			<ul>
				<li>
					<a
						class="text-link"
						href={`/downloads/${DRY_MIX_2023}.zip`}
						rel="noreferrer nofollow"
						target="_blank">Dry Mix</a>
				</li>
			</ul>
		</li>
		<li>
			2022 - Recorded by <a
			class="text-link"
			href="https://www.instagram.com/ill_i_saw/"
			rel="noreferrer nofollow"
			target="_blank">ill.i.saw</a
		>
			<ul>
				<li>
					<a
						class="text-link"
						href={`/downloads/${DRY_MIX_2022}.zip`}
						rel="noreferrer nofollow"
						target="_blank">Dry Mix</a>
				</li>
				<li>
					<a
						class="text-link"
						href={`/downloads/${WASILLI_MIX}.zip`}
						rel="noreferrer nofollow"
						target="_blank">Wet Mix</a>
				</li>
			</ul>
		</li>
	</ul>
	<p>
		If you plan on using or have used these audio tacks, please read the following. First off, I
		really appreciate anyone who downloads these audio track and shares it with their producer
		friends! With that being said, credit would be much appreciated. It would mean the world to me!
	</p>
	<h2>DIY Corner</h2>
	<ul>
		<li>
			How to make a
			<a
				class="text-link"
				href="/downloads/Video%20Product%20Guide.pdf"
				rel="noreferrer nofollow"
				target="_blank"
			>Video Product</a>
		</li>
	</ul>
</div>

<dialog bind:this={dialog} aria-label="Quick Intro Presentation" onclose={onDialogClose}>
	<div class="dialog-header">
		<form method="dialog">
			<button class="close-btn" aria-label="Close presentation">✕</button>
		</form>
	</div>
	{#if presentationLoaded}
		<div class="embed-wrapper">
			<iframe
				src={CANVA_EMBED}
				title="MC SCRPT Quick Intro Presentation"
				allowfullscreen
				allow="fullscreen"
			></iframe>
		</div>
	{:else}
		<div class="consent-notice">
			<p>This presentation is hosted on Canva and will load third-party scripts.</p>
			<div class="consent-actions">
				<button class="text-link" onclick={() => (presentationLoaded = true)}>Load presentation</button>
				<span aria-hidden="true">·</span>
				<a class="text-link" href={CANVA_LINK} target="_blank" rel="noreferrer nofollow">Open on Canva</a>
			</div>
		</div>
	{/if}
</dialog>

<style>
    li {
        line-height: 1.6;
    }

    .presentation-btn {
        cursor: pointer;
        font-size: inherit;
        font-family: inherit;
    }

    dialog {
        width: min(90vw, 960px);
        max-height: 90vh;
        background: black;
        color: white;
        border: thin solid white;
        padding: 0;
    }

    dialog::backdrop {
        background: rgba(0, 0, 0, 0.85);
    }

    .dialog-header {
        display: flex;
        justify-content: flex-end;
        padding: 0.5rem;
    }

    .close-btn {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        line-height: 1;
        padding: 0.25rem 0.5rem;
    }

    .close-btn:hover {
        color: red;
    }

    .consent-notice {
        padding: 1.5rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .consent-notice p {
        margin: 0;
    }

    .consent-actions {
        display: flex;
        gap: 0.75rem;
        align-items: center;
    }

    .embed-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
    }

    .embed-wrapper iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: none;
    }
</style>