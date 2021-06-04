function rotateArr(arr, n, count = 0) {
  if (count === n) {
    return arr;
  }

  let lastMember = arr.pop();
  arr.unshift(lastMember);

  return rotateArr(arr, n, count + 1);
}

console.log(rotateArr(["a", "b", "c", "d", "e", "f", "g", "h"], 3));
