export const getYears = (dates, key) => {
  return [
    ...new Set(dates.map(date => new Date(date[key]).getFullYear()))
  ]
}
