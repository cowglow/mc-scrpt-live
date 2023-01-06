export const footerYear = (): number => {
	const date = new Date(Date.now());
	return date.getFullYear();
};
