let number = 12345678;
let numToString = String(number);
let stringToArr = numToString.split("");

let lastDigit = Math.floor(number % 10);
stringToArr.pop();
let firstNum = stringToArr.shift();
stringToArr.unshift(lastDigit);

console.log(stringToArr + "," + firstNum);
