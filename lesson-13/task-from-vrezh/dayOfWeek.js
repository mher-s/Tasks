function getWeekDay(date) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return days[date.getDay()];
}
let date1 = new Date("12/07/2016");
let date2 = new Date("09/04/2016");
let date3 = new Date("12/08/2011");
console.log(getWeekDay(date1));
console.log(getWeekDay(date2));
console.log(getWeekDay(date3));
