function filterRangeInPlace(array, a, b) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element < a || element > b) {
      array.splice(i, 1);
      i--;
    }
  }
  return array;
}

console.log(filterRangeInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 6));
