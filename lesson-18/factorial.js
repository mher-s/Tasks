function factorial(n) {
  function inner(n, acc) {
    if (n === 0) {
      return acc;
    }
    return inner(n - 1, acc * n);
  }
  return inner(n, 1);
}

console.log(factorial(5));
