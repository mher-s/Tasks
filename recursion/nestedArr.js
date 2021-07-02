function nestedArr(arr, idx = 0) {
  if (Array.isArray(arr[idx])) {
    arr.splice(idx, 1, ...arr[idx]);
      idx -= 1;
  }
  if (idx === arr.length) {
    return arr;
  }
  return nestedArr(arr, (idx += 1));
}

console.log(nestedArr([1, [3, 4, [1, 2]], 10]));
console.log(nestedArr([14, [1, [[[3, []]], 1], 0]]));
