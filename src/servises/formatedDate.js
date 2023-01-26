export const formatedDate = (year, month, day) => {
  const formatedDate = [
    String(year),
    String(month + 1).padStart(2, "0"),
    String(day).padStart(2, "0"),
  ];
  const result = formatedDate.join("-");
  return result;
};
