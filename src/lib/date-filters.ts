export const getPreviousDates = (events: EventShow[]): EventShow[] => {
	const currentDate = Date.now();
	return events.filter(({ date }) => {
		return Date.parse(date.toUTCString()) < currentDate.valueOf();
	});
};

export const getUpcomingDates = (events: EventShow[]): EventShow[] => {
	const currentDate = Date.now();
	return events.filter(({ date }) => {
		return Date.parse(date.toUTCString()) > currentDate.valueOf();
	});
};
