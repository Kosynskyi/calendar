export const dateMatch = (year, month, day) => {
  const currentDate = new Date().toLocaleDateString();
  const currentFormatedDate = Number(currentDate.match(/\d/gm).join(""));

  const formatedDate = [
    String(day).padStart(2, "0"), // додав .padStart(2, "0")
    String(month).padStart(2, "0"),
    String(year),
  ];
  const result = Number(formatedDate.join(""));
  const matchDate = currentFormatedDate === result;

  return matchDate;
};
