function myFind(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (fn(element)) {
      return element;
    }
  }
  return thatIndex;
}

console.log(
  myFind([1, 2, 3, 4, 5, 6, 7, 8, 9], (element) => {
    return element > 5;
  })
);
