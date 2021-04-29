let firstNum, secondNum, thirdNum;

if (firstNum === 0 || secondNum === 0 || thirdNum === 0) {
  console.log("unsigned");
} else if (
  (firstNum < 0 && secondNum < 0) ||
  (firstNum < 0 && thirdNum < 0) ||
  thirdNum < 0 && secondNum < 0
) {
    console.log('-')
} else {
    console.log('+')
}
