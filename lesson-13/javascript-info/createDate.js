function checkDate(arr) {
  let date = new Date(...arr);
  return date;
}

console.log(checkDate([2012, 1, 20, 3, 12]));
