function concatRev(arr) {
  const baseArr = [...arr];
  const reversed = arr.reverse();
  return baseArr.concat(reversed);
}

console.log(concatRev([1, 2, 3]));
