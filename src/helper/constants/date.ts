const currentYear = new Date().getFullYear();
const currentMounth = new Date().getMonth();
const currentDay = new Date().getDate();

const dateArr = `${currentDay}${currentMounth}${currentYear}`;

export const dateSum = dateArr
  .split("")
  .map((el) => +el)
  .reduce((t, v) => t + v);
