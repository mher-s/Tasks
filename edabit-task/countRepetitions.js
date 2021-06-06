function countRepetitions(arr) {
  let result = {};
  arr.forEach(function (item) {
    console.log(result[item]);
    result[item] = (result[item] || 0) + 1;
  });
  return result;
}

// console.log(countRepetitions(["cat", "dog", "cat", "cow", "cow", "cow"])); // ➞ { cow: 3, cat: 2, dog: 1 }
// console.log(countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0])); // ➞ { 0: 6, 5: 3, 12: 2, 1: 1 }
console.log(countRepetitions(["Infinity", "null", "Infinity", "null", "null"])); // ➞ { null: 3, Infinity: 2}
