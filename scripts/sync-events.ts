import { config } from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

type EventShow = {
	name: string;
	date: string;
	venue: string;
	link: string;
};

config({ path: path.resolve('.env') });

const DEPLOY_URL = `https://${process.env.GAS_URL}/${process.env.DEPLOYMENT_ID}/exec`;
console.log('DEPLOY_URL', DEPLOY_URL);

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
		const data = await fetch(DEPLOY_URL, {
			method: 'GET',
			headers: { Accept: 'application/json' }
		});
		const shows = await data.json();

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
		const eventDate = Date.parse(date);
		return eventDate < currentDate;
	});
}

function getUpcomingDates(events: EventShow[]): EventShow[] {
	const currentDate = Date.now();
	return events.filter(({ date }) => {
		const eventDate = Date.parse(date);
		return eventDate > currentDate.valueOf();
	});
}

syncEvents()
	.then(() => {
		console.log(' == END ==');
	})
	.catch((err) => {
		console.error(err);
		process.exit(0);
	});
