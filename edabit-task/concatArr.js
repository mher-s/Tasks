function concatArr(...array) {
  let res = [];
  for (let i = 0; i < array.length; i++) {
    const element = Number(array[i]);
    res.push(element);
  }
  return res;
}

console.log(concatArr([1], [2], [3], [4]));
