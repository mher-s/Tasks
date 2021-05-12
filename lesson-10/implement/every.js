function myEvery(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!fn(element)) {
      return false;
    }
  }
  return true;
}

console.log(
  myEvery([], (element) => {
    return element > 5;
  })
);
