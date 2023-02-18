import { config } from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

type EventShow = {
	name: string;
	date: Date;
	venue: string;
	link: string;
};

type EventData = {
	zeitstempel: string;
	eventDate: string;
	eventName: string;
	eventLink: string;
	eventLocation: string;
	eventStartTime: string;
};

config({ path: path.resolve('.env') });

const GAS_URL = process.env.GAS_URL;
const GAS_PRODUCT = process.env.GAS_PRODUCT;

/**
 * Make sure the `data` directory exists or the script will fail
 */
const UPCOMING_SHOWS_FILE_PATH = 'src/data/upcoming-shows.json';
const PREVIOUS_SHOWS_FILE_PATH = 'src/data/previous-shows.json';
const PREVIOUS_SHOWS_TRIMMED_FILE_PATH = 'src/data/previous-shows-trimmed.json';

const files = [
	UPCOMING_SHOWS_FILE_PATH,
	PREVIOUS_SHOWS_FILE_PATH,
	PREVIOUS_SHOWS_TRIMMED_FILE_PATH
];

async function syncEvents() {
	console.log(' == SYNC RESOURCES ===');
	try {
		console.log(' -- Remove old files');
		files.map((file) => {
			if (fs.existsSync(file)) fs.unlinkSync(file);
		});

		console.log(' -- Fetch data');
		const events = await fetch(`https://${GAS_URL}/${GAS_PRODUCT}/exec`);
		const { data } = await events.json();

		console.log(' -- Convert to shows');
		const shows = data.map(createShow);

		console.log(' -- Filter shows');
		const upcomingDates = getUpcomingDates(shows);
		const previousDates = getPreviousDates(shows);
		const trimmedPreviousDates = previousDates.slice(0, 6);

		console.log(' -- Create new files');
		await fs.writeFileSync(UPCOMING_SHOWS_FILE_PATH, JSON.stringify(upcomingDates, null, 2));
		await fs.writeFileSync(PREVIOUS_SHOWS_FILE_PATH, JSON.stringify(previousDates, null, 2));
		await fs.writeFileSync(
			PREVIOUS_SHOWS_TRIMMED_FILE_PATH,
			JSON.stringify(trimmedPreviousDates, null, 2)
		);
	} catch (err) {
		console.error(err);
	}
}

function getPreviousDates(events: EventShow[]): EventShow[] {
	const currentDate = Date.now();
	return events.filter(({ date }) => {
		return Date.parse(date.toISOString()) < currentDate.valueOf();
	});
}

function getUpcomingDates(events: EventShow[]): EventShow[] {
	const currentDate = Date.now();
	return events.filter(({ date }) => {
		return Date.parse(date.toUTCString()) > currentDate.valueOf();
	});
}

function createShow(event: EventData): EventShow {
	const { eventName, eventDate, eventStartTime, eventLocation, eventLink } = event;
	const date = new Date(eventDate);
	const startTime = new Date(eventStartTime);
	const showDate = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate(),
		startTime.getHours(),
		startTime.getMinutes(),
		startTime.getSeconds(),
		startTime.getMilliseconds()
	);
	return {
		name: eventName,
		date: showDate,
		venue: eventLocation,
		link: eventLink
	};
}

syncEvents()
	.then(() => {
		console.log(' == END ==');
	})
	.catch((err) => {
		console.error(err);
		process.exit(0);
	});
