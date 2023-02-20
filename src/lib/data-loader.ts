export async function dataLoader(url: string) {
	try {
		const response = await fetch(url, { cache: 'force-cache' });
		console.log('response', response);
		return await response.json();
	} catch (err: unknown) {
		console.log(err);
	}
}
