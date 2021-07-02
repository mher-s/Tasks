let concatedArr = [];

function concatTwoArrays(firstArr, secondArr) {
  concatedArr = concatedArr.concat(firstArr, secondArr);
  return concatedArr;
}

console.log(concatTwoArrays((arr1 = [1, 2, 3, 4]), (arr2 = [5, 6, 7, 8, 9])));
