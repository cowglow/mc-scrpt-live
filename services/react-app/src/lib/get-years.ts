export const getYears = (dates:any, key:any):any => {
  return [
    // @ts-ignore
    ...new Set(dates.map(date => new Date(date[key]).getFullYear()))
  ]
}
