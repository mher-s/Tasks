function addNullIfNaN(arr) {
  let result = [];
  arr.map(function checkNumbers(arr) {
    if (!isNaN(arr)) {
      result.push(arr);
    } else {
      result.push(null);
    }
  });
  return result;
}

console.log(addNullIfNaN([1, undefined, 3, NaN, 5, null, 7, 'str', 9, [1,2,3], 11, ['str', 'str', 'str']]));
