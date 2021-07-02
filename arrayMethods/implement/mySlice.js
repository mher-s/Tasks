function mySlice(arr, from, to) {
  let sliced = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (i >= from && i < to) {
      sliced.push(element);
    }
  }
  return sliced;
}

console.log(mySlice([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 5));
