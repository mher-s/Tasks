function fromPairs(arr) {
  const obj = Object.fromEntries(arr);
  return obj;
}

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
  ])
);
