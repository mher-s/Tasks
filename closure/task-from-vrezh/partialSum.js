function sum(firstNum) {
  return function sum(secondNum) {
    console.log(firstNum + secondNum);
  };
}

sum(1)(2);
const addOne = sum(1);
addOne(2);
const addTen = sum(10);
addTen(2);
addOne(4);
addTen(10);
