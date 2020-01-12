export const getDate = (now = Date.now()) => {
    const date = new Date(now)
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    return (
      date.getDate() +
      ' ' +
      months[date.getUTCMonth()] +
      ' ' +
      date.getUTCFullYear()
    )
};
