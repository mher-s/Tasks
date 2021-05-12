function myFindIndex(arr, fn) {
  let thatIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (fn(element)) {
      thatIndex = i;
      break;
    }
  }
  return thatIndex;
}

console.log(
  myFindIndex([1, 2, 3, 4, 5, 6, 7, 8, 9], (element) => {
    return element > 5;
  })
);
