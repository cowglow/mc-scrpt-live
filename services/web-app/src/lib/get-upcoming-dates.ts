export const getUpcomingDates = (dates) => {
  const currentDate = new Date();
  return dates.filter(({ eventDate }) => {
    return Date.parse(eventDate) > currentDate.valueOf();
  });
};
