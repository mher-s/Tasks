const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function addNullIfNaN(arr) {
  let result = [];
  arr.filter(function checkNumbers(arr) {
    if (parseInt(arr)) {
      result.push(arr);
    }
  });
  return result;
}

console.log(addNullIfNaN(arr));
