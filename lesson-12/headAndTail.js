function headAndTail(arr) {
  [head, ...tail] = arr;
  return {head,tail}
}

console.log(headAndTail([1, 2, 3, 4, 5, 6, 7, 8, 9]));
