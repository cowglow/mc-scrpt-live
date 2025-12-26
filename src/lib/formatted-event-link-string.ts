export function formattedEventLinkString(urlString: string) {
	if (!urlString) return false;
	const url = new URL(urlString);
	return `${url.hostname.replace("www.", "")}${url.pathname}`;
}
