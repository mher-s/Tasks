function filterByLength(array) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray
}

console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"])); // ['tesla','mercedes']