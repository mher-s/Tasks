function addUp(number) {
  let numberSum = 0;
  for (let i = 0; i <= number; i++) {
    numberSum += i;
  }
  return numberSum;
}

console.log(addUp(4));
