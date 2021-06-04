function lessThen100(firstNumber, secondNumber) {
  if (firstNumber + secondNumber >= 100) {
    return false;
  }
  return true;
}

console.log(lessThen100(99, 0));
