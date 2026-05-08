<script lang="ts">
	import { formattedEventLinkString } from "$lib/formatted-event-link-string";
	import { verifyVenue } from "$lib/verify-venue";

	export let name = "";
	export let date = new Date();
	export let venue = "";
	export let link = "";

	$: eventDate = new Date(date);
	$: eventMonth = eventDate.toLocaleString("de-DE", {
		timeZone: "Europe/Berlin",
		month: "2-digit"
	});

	$: eventMonthMobile = eventDate.toLocaleString("de-DE", {
		timeZone: "Europe/Berlin",
		month: "short"
	});

	$: eventDay = eventDate.toLocaleString("de-DE", {
		timeZone: "Europe/Berlin",
		day: "2-digit"
	});

	$: eventYear = eventDate.toLocaleString("de-DE", {
		timeZone: "Europe/Berlin",
		year: "numeric"
	});

	$: eventUrl = formattedEventLinkString(link);

	$: eventStartTime = eventDate.toLocaleString("de-DE", {
		timeZone: "Europe/Berlin",
		hour: "2-digit",
		minute: "2-digit"
	});

	$: verifiedVenueLink = verifyVenue(venue);
</script>

<article class="wrapper h-event">
	<div class="flex-it event-date">
		<time class="dt-start" datetime={eventDate.toISOString()}>
			<div class="mobile">
				<span>{eventMonthMobile}<br />{eventYear}</span>
			</div>
			<div class="desktop">
				<span>{eventMonth} {eventDay}<br />{eventYear}</span>
			</div>
		</time>
	</div>
	<div class="flex-it event-name">
		<span class="p-name">{name}</span>
		{#if verifiedVenueLink}
			<a
				class="p-location"
				href={verifiedVenueLink}
				rel="noreferrer nofollow"
				target="map-link"
				aria-label="View {venue} on Google Maps"
			>
				{venue}
			</a>
		{:else}
			<span class="p-location">{venue}</span>
		{/if}
	</div>
	<div class="flex-it event-link">
		{#if link}
			<div class="mobile">
				<a class="u-url" href={link} rel="noreferrer nofollow" target="event-link" aria-label="Event details for {name}">
					<img alt="" src="/images/event-link-icon.svg" role="presentation" />
				</a>
			</div>
			{#if verifiedVenueLink}
				<div class="desktop">
					<img alt="" src="/images/event-link-icon.svg" role="presentation" />
					<a class="u-url" href={link} rel="noreferrer nofollow" target="event-link">
						{eventUrl}
					</a>
				</div>
			{/if}
		{/if}
	</div>
	<div class="flex-it event-time desktop">
		<div class="desktop">
			<img alt="" src="/images/event-start-time-icon.svg" role="presentation" />
			<span>{eventStartTime}</span>
		</div>
	</div>
</article>

<style>
	.wrapper {
		display: flex;
		min-height: 5em;
		background-color: red;
		flex-grow: 1;
	}

	.wrapper:nth-child(even) {
		color: white;
		background-color: black;
	}

	.wrapper:nth-child(odd) a {
		color: black;
	}

	.wrapper:nth-child(odd) a:hover {
		color: red;
	}

	.wrapper:nth-child(odd) {
		color: black;
		background-color: white;
	}

	.flex-it {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.event-date {
		width: 16%;
		max-width: 165px;
	}

	.event-name {
		width: 38%;
		max-width: 400px;
		flex-grow: 1;
		align-items: flex-start;
		padding: 0.5em 0;
	}

	.event-name .p-name {
		font-size: 1.375rem;
		line-height: 1.1;
	}

	.event-name .p-location {
		color: red;
	}

	.event-link {
		padding: 10px;
		align-items: center;
		width: 15%;
	}

	.event-link a {
		margin-left: 4px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.event-time {
		padding: 15px;
		align-items: center;
		width: 15%;
	}

	.event-time span {
		margin-left: 4px;
	}

	.mobile {
		display: flex;
	}

	.desktop {
		display: none;
	}

	@media screen and (min-width: 700px) {
		.mobile {
			display: none;
		}

		.desktop {
			display: flex;
		}

		.event-date {
			width: 16%;
		}

		.event-name {
			width: 38%;
		}

		.event-link {
			width: 28%;
			max-width: 310px;
			align-items: flex-start;
			line-height: unset;
			font-size: 1.25rem;
			overflow: hidden;
		}

		.event-time {
			width: 18%;
			max-width: 205px;
		}
	}
</style>