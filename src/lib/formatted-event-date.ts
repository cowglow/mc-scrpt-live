export default function formattedEventDate(date: Date) {
	const now = new Date();
	const isCurrentYear = date.getFullYear() === now.getFullYear();

	return date.toLocaleDateString(navigator.languages, {
		year: isCurrentYear ? undefined : "numeric",
		month: "short",
		day: "2-digit"
	});
}
