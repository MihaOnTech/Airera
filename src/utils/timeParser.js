export const parseTime = (date) => {
    const timePart = date.split('T')[1].split('.')[0];
    return timePart;
}