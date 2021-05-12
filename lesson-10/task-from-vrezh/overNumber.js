function calcOverNumber(arr) {
  return arr.reduce(function (acc, currentValue) {
    if (currentValue > 18) {
      acc += currentValue;
    }
    return acc;
  }, 0);
}

console.log(
  calcOverNumber([1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43])
);
