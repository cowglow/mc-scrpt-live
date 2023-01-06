import { writable } from 'svelte/store';

export default async function (url: string, fetch: any) {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (err: unknown) {
		console.log(err);
	}
	// const loading = writable(false);
	// const error = writable<boolean | unknown>(false);
	// const data = writable<EventShow[]>([]);
	//
	// async function loadData(url: string) {
	// 	loading.set(true);
	// 	try {
	// 		const response = await fetch(url);
	// 		const json = await response.json();
	// 		return json.events;
	// 	} catch (err: unknown) {
	// 		error.set(err);
	// 	}
	// 	loading.set(false);
	// }
	//
	// const results = await loadData(url);
	// data.set(results);
	// // .then((results) => {
	// // 	data.set(results);
	// //
	// // });
	// return [loading, error, data];
}
