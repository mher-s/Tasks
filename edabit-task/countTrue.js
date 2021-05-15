function countTrue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element === true) {
      count++;
    } 
  }
  return count;
}

console.log(countTrue([true, false, false, true, false])); // ➞ 2
console.log(countTrue([false, false, false, false])); // ➞ 0
console.log(countTrue([])); // ➞ 0
