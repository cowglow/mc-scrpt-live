export const getTimeDifference = (dateFuture: Date, currentDate = new Date(Date.now())) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let diff = Math.abs((dateFuture - currentDate) / 1000);

  const days = Math.floor(diff / 86400);
  diff -= days * 86400;

  const hours = Math.floor(diff / 3600) % 24;
  diff -= hours * 3600;

  const minutes = Math.floor(diff / 60) % 60;
  diff -= minutes * 60;

  const seconds = Math.floor((diff / 60) * 60) % 60;

  return { days, hours, minutes, seconds };
};
