function filterRange(arr, a, b) {
  let filterArrByRange = [];

  arr.filter(function (item) {
    if (item >= a && item <= b) {
      filterArrByRange.push(item);
    }
  });
  return filterArrByRange;
}

console.log(filterRange([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 6));
