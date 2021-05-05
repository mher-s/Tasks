function findLarger(arr, num) {
  let largerArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element > num) {
      largerArr.push(element);
    }
  }
  if (largerArr.length === 0) {
    return "There is no larger items";
  }
  return largerArr;
}

console.log(findLarger([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
