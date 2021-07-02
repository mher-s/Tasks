function checkLong(number) {
  let numberToStr = String(number);
  if (numberToStr.length < 10 || numberToStr.length > 10) {
    return "Bad number";
  } else {
    return number;
  }
}

function checkPlus(number) {
  let numberToStr = String(number);
  let strToArr = numberToStr.split("");

  if (strToArr[0] === "+") {
    strToArr.shift();
  }
  if (isNaN(Number(strToArr.join("")))) {
    return "Bad number";
  }
  return checkLong(Number(strToArr.join("")))
}

console.log(checkPlus("+1234567890"));
