function howMuchMatches(houses) {
  let sumOfMatches = 6;
  if (houses === 0) {
    return 0;
  } else if (houses === 1) {
    return sumOfMatches;
  }

  for (let i = 0; i < houses - 1; i++) {
    sumOfMatches += 5;
  }
  return sumOfMatches;
}

console.log(howMuchMatches(87));
