const getDate = (now = Date.now()) => {
    const date = new Date(now * 1000);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
};

export default getDate;
