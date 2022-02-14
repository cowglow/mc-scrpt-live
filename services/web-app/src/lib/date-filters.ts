export const getPreviousDates = (events: ShowData[]) => {
  const currentDate = new Date();
  return events.filter(({ eventDate }) => {
    return Date.parse(eventDate) < currentDate.valueOf();
  });
};

export const getUpcomingDates = (events) => {
  const currentDate = new Date();
  return events.filter(({ eventDate }) => {
    return Date.parse(eventDate) > currentDate.valueOf();
  });
};
