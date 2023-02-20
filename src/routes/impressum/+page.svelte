<script lang="ts">
	import { scrollToView } from '$lib/scroll-to-view';
	import { SOUNDCLOUD_LOCALSTORAGE_KEY, YOUTUBE_LOCALSTORAGE_KEY,EVENT_LOCALSTORAGE_KEY } from '$lib/constants';

	function removeLocalStorageItem(key) {
		window.localStorage.removeItem(key);
	}
</script>

<svelte:head>
	<title>MC.SCRPT.LIVE | Impressum</title>
</svelte:head>
<div id="imprint" class="wrapper" use:scrollToView>
	<h1>Impressum</h1>
	<h2>Angaben gemäß § 5 TMG:</h2>
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

	<h2>Event Log</h2>
	<p>
		Please be advised that this website will store the event calendar data in your browser's local storage. This is
		done to avoid unnecessary requests to the server.
		<br />
		The data will be stored indefinitely. Or until you clear the cache. But the validity of the data will only last
		1 week. That means if you visit the website after 1 week, the data be invalid and a request will be made to the
		server to retrieve the latest data.
		<br>
		<button class="text-link" on:click={() => removeLocalStorageItem(EVENT_LOCALSTORAGE_KEY)}>
			Reset stored event data
		</button>
	</p>

	<h2>YouTube</h2>
	<p>
		Please be advised that this website uses a Youtube embedded playlist.
		<br />
		This embedded playlist uses
		<a
			href="https://support.google.com/youtube/answer/171780"
			rel="noopener noreferrer"
			target="_blank"
			class="text-link"
		>
			Privacy Enhanced Mode
		</a>.
		<br />
		They may also collect usage data for analytics purposes.
		<br />
		<button class="text-link" on:click={() => removeLocalStorageItem(YOUTUBE_LOCALSTORAGE_KEY)}>
			Reset consent banner
		</button>
	</p>

	<h2>SoundCloud</h2>
	<p>
		Please be advised that this website uses a SoundCloud embedded media player.
		<br />
		This embedded media player uses cookies in accordance SoundCloud's
		<a
			href="https://soundcloud.com/pages/cookies"
			rel="noopener noreferrer"
			target="_blank"
			class="text-link"
		>
			Cookies policy
		</a>.
		<br />
		They may also collect usage data for analytics purposes.
		<br />
		<button class="text-link" on:click={() => removeLocalStorageItem(SOUNDCLOUD_LOCALSTORAGE_KEY)}>
			Reset consent banner
		</button>
	</p>

	<h2>Hosting</h2>
	<p>
		The code and content for this website can be found on GitHub. To learn more about Github Pages
		please visit their <a
			class="text-link"
			href="https://pages.github.com/"
			rel="noopener noreferrer"
			target="_blank">website</a
		>.
	</p>

	<h2>Downloads</h2>
	<p>
		For more information, please refer to the README.md file located in the zipped downloaded asset.
		Sharing concept modeled after <a
			class="text-link"
			href="https://www.caseycalhounbeats.com/music-usage.html"
		>
			Casey Calhoun
		</a>
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
