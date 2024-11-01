<script lang="ts">
	import { formattedEventLinkString } from "$lib/formatted-event-link-string";

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
</script>

<div class="wrapper">
	<div class="flex-it event-date">
		<div class="mobile">
			<span>{eventMonthMobile}<br />{`${eventYear}`}</span>
		</div>
		<div class="desktop">
			<span>{`${eventMonth} ${eventDay}`}<br />{`${eventYear}`}</span>
		</div>
	</div>
	<div class="flex-it event-name">
		<span>{name}</span>
		<span>{venue}</span>
	</div>
	<div class="flex-it event-link">
		<div class="mobile">
			<a href={link} rel="noreferrer nofollow" target="event-link">
				<img alt="Event link icon" src="/images/event-link-icon.svg" />
			</a>
		</div>
		<div class="desktop">
			<img alt="Event link icon" src="/images/event-link-icon.svg" />
			<a href={link} rel="noreferrer nofollow" target="event-link">
				{eventUrl}
			</a>
		</div>
	</div>
	<div class="flex-it event-time desktop">
		<div class="desktop">
			<img alt={`Event Start Time is ${eventStartTime}`} src="/images/event-start-time-icon.svg" />
			<span>{eventStartTime}</span>
		</div>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		max-height: 4em;
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
	}

	.event-name span:nth-child(1) {
		font-size: 22px;
		line-height: 24px;
	}

	.event-name span:nth-child(2) {
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
			font-size: 20px;
			overflow: hidden;
		}

		.event-time {
			width: 18%;
			max-width: 205px;
		}
	}
</style>
