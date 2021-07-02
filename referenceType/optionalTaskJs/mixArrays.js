let mainArr = [2, 3, 4, 5, 6, 7, 8, 9];
let secondaryArr = [1, 10];

let firstItem = secondaryArr.shift();
let lastItem = secondaryArr.pop();

mainArr.unshift(firstItem);
mainArr.push(lastItem);

console.log(mainArr);
