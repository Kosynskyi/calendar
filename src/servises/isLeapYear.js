export const isLeapYear = (currentYear, objectCalendar) => {
  currentYear % 4 === 0
    ? (objectCalendar.February = 29)
    : (objectCalendar.February = 28);

  return objectCalendar;
};
