function sortingBy(arr, str) {

  let strToLowerCase = str.toLowerCase();

  if (strToLowerCase === "asc") {
    return minToMax = arr.sort((a, b) => a - b);
  } else if (strToLowerCase === "desc") {
    return maxToMin = arr.sort((a, b) => b - a);
  } else {
    return arr;
  }
}

console.log(sortingBy([1, 2, 3, 4, 8, 9, 7, 8, 9], "asc")); // Asc Desc
