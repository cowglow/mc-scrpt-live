<script lang="ts">
	import {
		SOUNDCLOUD_LOCALSTORAGE_KEY,
		YOUTUBE_LOCALSTORAGE_KEY,
		EVENT_LOCALSTORAGE_KEY,
		EVENT_LOG_LAST_UPDATE_KEY
	} from "$lib/constants";
	import translations from "$stores/i18n-store";

	$: t = $translations;

	function removeLocalStorageItem(key) {
		window.localStorage.removeItem(key);
	}

	function removeAllLocalStorageItems() {
		window.localStorage.removeItem(SOUNDCLOUD_LOCALSTORAGE_KEY);
		window.localStorage.removeItem(YOUTUBE_LOCALSTORAGE_KEY);
		window.localStorage.removeItem(EVENT_LOCALSTORAGE_KEY);
		window.localStorage.removeItem(EVENT_LOG_LAST_UPDATE_KEY);
	}
</script>

<svelte:head>
	<title>MC.SCRPT.LIVE | Impressum</title>
</svelte:head>
<div id="imprint" class="page-wrapper">
	<h1>Impressum</h1>
	<h2>{t["impressum.legal.heading"]}</h2>
	<address>
		<p>
			Philip Saa<br />
			Junglist MC<br />
			Meckenhausen C8<br />
			Hilpoltstein<br />
			E-mail: <a href="mailto:cowglow@gmail.com" class="text-link">cowglow@gmail.com</a>
		</p>
	</address>
	<br />

	<h2>{t["impressum.eventLog.title"]}</h2>
	<p>
		{t["impressum.eventLog.description"]}
		<br />
		{t["impressum.eventLog.expiry"]}
		<br />
		<button class="text-link" on:click={() => removeLocalStorageItem(EVENT_LOCALSTORAGE_KEY)}>
			{t["impressum.eventLog.reset"]}
		</button>
	</p>

	<h2>{t["impressum.youtube.title"]}</h2>
	<p>
		{t["impressum.youtube.description"]}
		<br />
		{t["impressum.youtube.enhanced"]}
		<a
			href="https://support.google.com/youtube/answer/171780"
			rel="noopener noreferrer"
			target="_blank"
			class="text-link"
		>
			Privacy Enhanced Mode
		</a>.
		<br />
		{t["impressum.youtube.analytics"]}
		<br />
		<button class="text-link" on:click={() => removeLocalStorageItem(YOUTUBE_LOCALSTORAGE_KEY)}>
			{t["impressum.youtube.reset"]}
		</button>
	</p>

	<h2>{t["impressum.soundcloud.title"]}</h2>
	<p>
		{t["impressum.soundcloud.description"]}
		<br />
		{t["impressum.soundcloud.policy"]}
		<a
			href="https://soundcloud.com/pages/cookies"
			rel="noopener noreferrer"
			target="_blank"
			class="text-link"
		>
			Cookies policy
		</a>.
		<br />
		{t["impressum.soundcloud.analytics"]}
		<br />
		<button class="text-link" on:click={() => removeLocalStorageItem(SOUNDCLOUD_LOCALSTORAGE_KEY)}>
			{t["impressum.soundcloud.reset"]}
		</button>
	</p>

	<button
		class="text-link"
		style="font-size: large;padding:7px 30px;"
		on:click={() => removeAllLocalStorageItems()}
	>
		{t["impressum.reset.all"]}
	</button>

	<h2>{t["impressum.hosting.title"]}</h2>
	<p>
		{t["impressum.hosting.description"]}
		<a
			class="text-link"
			href="https://pages.github.com/"
			rel="noopener noreferrer"
			target="_blank">{t["impressum.hosting.link"]}</a
		>.
	</p>
	<p>
		GitHub Repo: <a
			class="text-link"
			href="https://github.com/cowglow/mc-scrpt-live"
			rel="noopener noreferrer"
			target="_blank">https://github.com/cowglow/mc-scrpt-live</a
		>
	</p>
	<p>
		Component Library: <a
			class="text-link"
			href="/storybook"
			rel="noopener noreferrer"
			target="_blank">mc.scrpt.live/storybook</a
		>
	</p>

	<h2>{t["impressum.downloads.title"]}</h2>
	<p>
		{t["impressum.downloads.description"]}
	</p>
</div>

<style>
	button {
		cursor: pointer;
	}

	button:hover {
		text-decoration: none;
	}
</style>