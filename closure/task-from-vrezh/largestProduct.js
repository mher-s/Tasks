function largestProduct(array) {
  let neighborProductArr = [];
  for (let i = 1; i < array.length; i++) {
    let neighborProduct = [i] * [i + 1];
    neighborProductArr.push(neighborProduct);
  }
  return Math.max(...neighborProductArr);
}

console.log(largestProduct([1, 2, 3, 4, 5, 6, 7, 8, 9]));
