function Calculator(firstNum, secondNum) {
  this.firstNum = firstNum;
  this.secondNum = secondNum;
}

Calculator.prototype.add = function () {
  return this.firstNum + this.secondNum;
};

Calculator.prototype.subtract = function () {
  return this.firstNum - this.secondNum;
};

Calculator.prototype.multi = function () {
  return this.firstNum * this.secondNum;
};

Calculator.prototype.divide = function () {
  return this.firstNum / this.secondNum;
};

const sumOfNumbers = new Calculator(10, 5);

console.log(sumOfNumbers.add());
console.log(sumOfNumbers.subtract());
console.log(sumOfNumbers.multi());
console.log(sumOfNumbers.divide());
