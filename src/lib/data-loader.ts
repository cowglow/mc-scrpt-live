export async function dataLoader(
	url: string,
	storageKey: string,
	expirationTime: number = 7 * 24 * 60 * 60 * 1000
) {
	const lastUpdateKey = `${storageKey}_LAST_UPDATE`;
	const lastUpdate = localStorage.getItem(lastUpdateKey);
	const now = new Date().getTime();

	// Check if cached data exists and is not expired
	if (lastUpdate && now - Number(lastUpdate) < expirationTime) {
		const cachedData = localStorage.getItem(storageKey);
		if (cachedData) {
			return JSON.parse(cachedData);
		}
	}

	try {
		const response = await fetch(url, { cache: "force-cache" });
		const json = await response.json();

		// Cache the data and update the last update time
		localStorage.setItem(storageKey, JSON.stringify(json));
		localStorage.setItem(lastUpdateKey, now.toString());

		return json;
	} catch (err: unknown) {
		console.log(err);
	}
}
