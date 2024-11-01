export function formattedEventLinkString(urlString: string) {
	const url = new URL(urlString);
	return `${url.hostname.replace("www.", "")}${url.pathname}`;
}
