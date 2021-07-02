function MaxToMin(arr) {
  return (sortedArr = arr.sort(function (a, b) {
    return b - a;
  }));
}
console.log(MaxToMin([1, 2, 3, 4, 5, 6, 7, 8, 9]));
