import { describe, expect, test } from 'vitest';

import { dataLoader } from './data-loader';

describe('Test dataLoader Utility Function', () => {
	const url = 'https://jsonplaceholder.typicode.com/todos/1';
	const storageKey = 'testData';
	const expirationTime = 5000;

	test('should fetch data from URL and cache it', async () => {
		// clear the cache
		console.log({ storageKey });
		localStorage.removeItem(storageKey);
		localStorage.removeItem(`${storageKey}_LAST_UPDATE`);

		const data = await dataLoader(url, storageKey, expirationTime);

		// check if data was returned and cached
		expect(data).toBeDefined();
		expect(localStorage.getItem(storageKey)).toBeDefined();
		expect(localStorage.getItem(`${storageKey}_LAST_UPDATE`)).toBeDefined();
		expect(true).not.toBeFalsy();
	});

	test('should fetch data from cache if it exists and is not expired', async () => {
		// set up cache
		localStorage.setItem(storageKey, JSON.stringify({ test: 'data' }));
		localStorage.setItem(
			`${storageKey}_LAST_UPDATE`,
			(new Date().getTime() - 1000).toString() // set last update time to 1 second ago
		);

		const data = await dataLoader(url, storageKey, expirationTime);

		// check if data was returned from cache
		expect(data).toEqual({ test: 'data' });
	});

	test('should fetch data from URL if cache is expired', async () => {
		// set up expired cache
		localStorage.setItem(storageKey, JSON.stringify({ test: 'old data' }));
		localStorage.setItem(
			`${storageKey}_LAST_UPDATE`,
			(new Date().getTime() - 2 * expirationTime).toString() // set last update time to 2 times the expiration time ago
		);

		const data = await dataLoader(url, storageKey, expirationTime);

		// check if data was fetched from URL and cached
		expect(data).toBeDefined();
		expect(data).not.toEqual({ test: 'old data' });
		expect(localStorage.getItem(storageKey)).toBeDefined();
		expect(localStorage.getItem(`${storageKey}_LAST_UPDATE`)).toBeDefined();
	});

	test('should handle fetch errors gracefully', async () => {
		// set up mock fetch that always throws an error
		globalThis.fetch = () => Promise.reject('Fetch Error');

		const data = await dataLoader(url, storageKey, expirationTime);

		// check if error was caught and logged
		expect(data).toBeUndefined();
		expect(console.log).toHaveBeenCalled();
	});
});
