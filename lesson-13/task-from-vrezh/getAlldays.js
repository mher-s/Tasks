function dayOfYear(dateEnd) {
  let inputDate = new Date(dateEnd).getTime();
  let yearStart = new Date("Jan 1, " + dateEnd.split("/")[2]).getTime();
  let fromTo = inputDate - yearStart;
  return Math.floor(fromTo / (1000 * 3600 * 24) + 1);
}
console.log(dayOfYear("12/31/2020"));
