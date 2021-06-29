function allTruthy(arr) {
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (!!element) {
      resArr.push(true);
    } else {
      resArr.push(false);
    }
  }
  if (resArr.includes(false)) {
    return false;
  } else {
    return true;
  }
}

console.log(allTruthy([true, true, true])); // ➞ true
console.log(allTruthy([true, false, true])); // ➞ false
console.log(allTruthy([5, 4, 3, 2, 1, 0])); // ➞ false
