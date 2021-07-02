function removeFirst(array, acc) {
  const [head, ...tail] = array;
  if (array.length === 0) {
    return `No more element's`;
  }
  console.log(tail)
  return removeFirst(tail, 0);
}

console.log(removeFirst([56, -9, 87, -23]));
