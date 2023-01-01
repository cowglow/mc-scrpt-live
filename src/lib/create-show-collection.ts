function createShow(event: EventData) {
	const { eventName, eventDate, eventStartTime, eventLocation, eventLink } = event;
	const date = new Date(eventDate);
	const startTime = new Date(eventStartTime);
	return {
		name: eventName,
		date: new Date(
			date.getFullYear(),
			date.getMonth(),
			date.getDate(),
			startTime.getHours(),
			startTime.getMinutes(),
			startTime.getSeconds(),
			startTime.getMilliseconds()
		),
		venue: eventLocation,
		link: eventLink
	};
}

export default function (events: EventData[]): EventShow[] {
	return events.map(createShow);
}
