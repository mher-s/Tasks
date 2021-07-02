let indexArray = [4, 3, 9].sort(function (a, b) {
  return a - b;
});

// SORTED 0 3 4 9

let max = indexArray[indexArray.length - 1];
let min = indexArray[0];

let result = Array(max - min).fill(undefined);
for (const index of indexArray) {
  result[index - min] = index;
}

console.log(result);
