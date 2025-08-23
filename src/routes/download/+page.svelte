<script lang="ts">
	const DRY_MIX_2022 = "DRY%20MC%20SCRPT%20-%20Vocal%20Sample%20Pack%20-%202022";
	const DRY_MIX_2023 = "DRY%20MC%20SCRPT%20-%20Vocal%20Sample%20Pack%20-%202023";
	const WASILLI_MIX = "ILL.I.SAW%20WET%20MIX%20-%20Vocal%20Sample%20Pack%20-%202022";
</script>

<svelte:head>
	<title>MC.SCRPT.LIVE | Downloads</title>
</svelte:head>
<div id="download" class="wrapper">
	<h1>Sound Packs</h1>
	<p>
		If you plan on using or have used these audio tacks, please read the following. First off, I
		really appreciate anyone who downloads these audio track and shares it with their producer
		friends! With that being said, credit would be much appreciated. It would mean the world to me!
	</p>
	<ul>
		<li>
			2023 - Recorded by <a
				class="text-link"
				href="https://www.instagram.com/salveshamlic/"
				rel="noreferrer nofollow">Salve Shamlic</a
			>
			<ul>
				<li>
					<a class="text-link" href={`/downloads/${DRY_MIX_2023}.zip`}>Dry Mix</a>
				</li>
			</ul>
		</li>
		<li>
			2022 - Recorded by <a
				class="text-link"
				href="https://www.instagram.com/ill_i_saw/"
				rel="noreferrer nofollow">ill.i.saw</a
			>
			<ul>
				<li>
					<a class="text-link" href={`/downloads/${DRY_MIX_2022}.zip`}>Dry Mix</a>
				</li>
				<li>
					<a class="text-link" href={`/downloads/${WASILLI_MIX}.zip`}>Wet Mix</a>
				</li>
			</ul>
		</li>
	</ul>
	<h1>Releases</h1>
	<ul>
		<li>
			Kontrolfreek by <a
				class="text-link"
				href="https://www.instagram.com/ill_i_saw/"
				rel="noreferrer nofollow">ill.i.saw</a
			>.
			<ul>
				<li>
					Available on
					<a
						class="text-link"
						href="https://on.soundcloud.com/g5gtswzcyiafsAmt5"
						rel="noreferrer nofollow">SoundCloud</a
					>
				</li>
			</ul>
		</li>
	</ul>
</div>

<style>
	li {
		line-height: var(--bottom-padding);
	}
</style>
