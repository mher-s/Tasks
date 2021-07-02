function whereViolated(arr, idx = 0) {
  if (arr[idx] > arr[idx + 1]) {
    return idx + 1;
  } else if (idx === arr.length - 1) {
    return -1;
  }
  return whereViolated(arr, (idx += 1));
}


console.log(whereViolated([2, 12, 15, 48, 64]));
console.log(whereViolated([-9, -4, -4, 3, 12, 4, 5]));
