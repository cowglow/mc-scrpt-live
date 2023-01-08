type dependencyInjection = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export default async function (url: string, fetch: dependencyInjection) {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (err: unknown) {
		console.log(err);
	}
}
