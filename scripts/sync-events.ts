import getUpcomingDates from "./lib/get-upcoming-dates";
import getPreviousDates from "./lib/get-previuos-dates";
import * as fs from "node:fs";
import process from "node:process";

const DEPLOY_URL = `https://${process.env.GAS_URL}/${process.env.DEPLOYMENT_ID}/exec`;

/**
 * Make sure the `data` directory exists or the script will fail
 */
const UPCOMING_SHOWS_FILE_PATH = "src/data/upcoming-shows.json";
const PREVIOUS_SHOWS_FILE_PATH = "src/data/previous-shows.json";
const PREVIOUS_SHOWS_TRIMMED_FILE_PATH = "src/data/previous-shows-trimmed.json";

const files = [
	UPCOMING_SHOWS_FILE_PATH,
	PREVIOUS_SHOWS_FILE_PATH,
	PREVIOUS_SHOWS_TRIMMED_FILE_PATH
];

async function syncEvents() {
	console.log(" == SYNC RESOURCES ===");
	try {
		console.log(" -- Remove old files");
		files.map((file) => {
			if (fs.existsSync(file)) fs.unlinkSync(file);
		});

		console.log(" -- Fetch data");
		const data = await fetch(DEPLOY_URL, {
			method: "GET",
			headers: { Accept: "application/json" }
		});
		const shows = await data.json();

		console.log(" -- Filter shows");
		const upcomingDates = getUpcomingDates(shows);
		const previousDates = getPreviousDates(shows);
		const trimmedPreviousDates = previousDates.slice(0, 6);

		console.log(" -- Create new files");
		fs.writeFileSync(UPCOMING_SHOWS_FILE_PATH, JSON.stringify(upcomingDates.reverse(), null, 2));
		console.log(JSON.stringify(upcomingDates.map(date => date.name).join("\n")))
		fs.writeFileSync(PREVIOUS_SHOWS_FILE_PATH, JSON.stringify(previousDates, null, 2));
		fs.writeFileSync(
			PREVIOUS_SHOWS_TRIMMED_FILE_PATH,
			JSON.stringify(trimmedPreviousDates, null, 2)
		);
	} catch (err) {
		console.error(err);
	}
}

syncEvents()
	.then(() => {
		console.log(" == END ==");
	})
	.catch((err) => {
		console.error(err);
		process.exit(0);
	});
