export const getPreviousDates = (events: ShowData[]): ShowData[] => {
  const currentDate = Date.now();
  return events.filter(({ eventDate }) => {
    return Date.parse(eventDate) < currentDate.valueOf();
  });
};

export const getUpcomingDates = (events: ShowData[]): ShowData[] => {
  const currentDate = Date.now();
  return events.filter(({ eventDate }) => {
    return Date.parse(eventDate) > currentDate.valueOf();
  });
};
