function getWeekDay(date) {
  let days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  return days[date.getDay()];
}
let date = new Date(2021, 05, 1);
console.log(getWeekDay(date));
