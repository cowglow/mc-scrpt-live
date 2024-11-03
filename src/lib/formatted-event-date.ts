export default function formattedEventDate(date: Date) {
	return date.toLocaleDateString(navigator.languages, {
		year: "numeric",
		month: "short",
		day: "2-digit"
	});
}
