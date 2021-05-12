function mySome(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (fn(element)) {
      return true;
    }
  }
  return false;
}

console.log(
  mySome([1,3,5,7,9], (element) => {
    return element % 2 === 0;
  })
);
