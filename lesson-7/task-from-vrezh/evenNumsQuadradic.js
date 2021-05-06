function evenNumbersQuadratic(array) {
  let evenArray = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element % 2 === 0) {
      element = Math.pow(element, 2);
      evenArray.push(element);
    }
  }
  return evenArray;
}

console.log(evenNumbersQuadratic([1, 2, 3, 4, 5, 6, 7, 8, 9]));
