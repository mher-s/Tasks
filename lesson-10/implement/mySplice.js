function mySplice(arr, start, howMuch) {
  let removedElement = [];
  let i = start;
  for (i; i < howMuch; i++) {
    const element = arr[i];
    removedElement.push(element);
  }
  return removedElement;
}

console.log(mySplice([1, 2, 3, 4, 5, 6, 7, 8, 9], 1, 9));
