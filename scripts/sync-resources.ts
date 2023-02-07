import { config } from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

config({ path: path.resolve('.env') });

const GAS_URL = process.env.GAS_URL;
const GAS_PRODUCT = process.env.GAS_PRODUCT;
/**
 * Make sure the `data` directory exists or the script will fail
 */
const OUTPUT_FILE_PATH = 'src/data/event-list.json';

async function getEventList(filePath: string) {
	try {
		const data = await fetch(`https://${GAS_URL}/${GAS_PRODUCT}/exec`);
		const json = await data.json();
		console.log(json.data);
		await fs.writeFileSync(filePath, JSON.stringify(json.data, null, 2));
	} catch (err) {
		console.error(err);
	}
}

const resourceServices = [{ filePath: OUTPUT_FILE_PATH, callback: getEventList }];

async function syncResources() {
	console.log(' == SYNC RESOURCES ===');
	try {
		await Promise.all(
			resourceServices.map(async (service) => {
				// Remove old files
				console.log(`deleting ${service.filePath}`);
				if (fs.existsSync(service.filePath)) fs.unlinkSync(service.filePath);
				// Create new files
				console.log(`calling ${service.callback.name}`);
				// Return resolution from callback
				return await service.callback(service.filePath);
			})
		);
	} catch (err) {
		console.error(err);
	}
}

syncResources()
	.then(() => {
		console.log('Done.');
	})
	.catch((err) => {
		console.error(err);
		process.exit(0);
	});
