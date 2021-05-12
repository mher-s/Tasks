function myFilter(arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (fn(element)) {
      filteredArr.push(element);
    }
  }
  return filteredArr;
}

console.log(
  myFilter([1, 2, 3, 4, 5, 6, 7, 8, 9], (element) => {
    return element > 5;
  })
);
