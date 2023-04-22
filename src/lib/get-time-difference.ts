interface TimeDifference {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export function getTimeDifference(
	dateFuture: Date,
	currentDate: Date = new Date()
): TimeDifference {
	const diff = Math.floor((dateFuture.getTime() - currentDate.getTime()) / 1000);
	return {
		days: Math.floor(diff / 86400),
		hours: Math.floor((diff % 86400) / 3600),
		minutes: Math.floor((diff % 3600) / 60),
		seconds: Math.floor(diff % 60)
	};
}
