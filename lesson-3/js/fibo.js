let nextTerm,
  firstNum = 0,
  secondNum = 1;
number = 15;

for (let i = 1; i <= number; i++) {
  console.log(firstNum);
  nextTerm = firstNum + secondNum;
  firstNum = secondNum;
  secondNum = nextTerm;
}
