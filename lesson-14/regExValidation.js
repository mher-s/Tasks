function myRegExp(str) {
  let regex = /(^[0-9]{6})$|(^[0-9]{4})$/;
  return regex.test(str);
}

console.log(myRegExp("1234")); // true
console.log(myRegExp("45135")); // false
console.log(myRegExp("89abc1")); // false
console.log(myRegExp("900876")); // true
console.log(myRegExp(" 4983")); // false
