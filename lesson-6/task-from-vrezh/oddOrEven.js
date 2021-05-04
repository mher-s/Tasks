function oddOrEven(inputArr) {
  let oddArr = [];
  let evenArr = [];
  for (let index = 0; index < inputArr.length; index++) {
    const element = inputArr[index];
    if (element % 2 === 0) {
      evenArr.push(element);
    } else {
      oddArr.push(element);
    }
  }
  return `Even array: ${evenArr}\nOdd array: ${oddArr}`;
}

console.log(oddOrEven([1, 2, 3, 4, 5, 6, 7, 8, 9]));
