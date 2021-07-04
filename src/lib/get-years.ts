export const getYears = (dates: any[], key: string) => {
  return [
    ...new Set(dates.map(date => new Date(date[key]).getFullYear()))
  ]
}
