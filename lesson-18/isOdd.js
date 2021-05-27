function isOdd(num) {
  const numberArr = String(num).split("");
  function checkArr(digit) {
    const [head, ...tail] = digit;
    if (head % 2 === 0) {
      return "false";
    } 
    return checkArr(tail);
  }
  return checkArr(numberArr);
}

console.log(isOdd(11112));