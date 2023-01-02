import { writable } from 'svelte/store';

export default function (url: string) {
	const loading = writable(false);
	const error = writable<boolean | unknown>(false);
	const data = writable<EventShow[]>([]);

	async function loadData(url: string) {
		loading.set(true);
		try {
			const response = await fetch(url);
			const json = await response.json();
			const shows = json.events;
			data.set(shows);
		} catch (err: unknown) {
			error.set(err);
		}
		loading.set(false);
	}

	loadData(url).then((r) => console.log(r));

	return [loading, error, data];
}
