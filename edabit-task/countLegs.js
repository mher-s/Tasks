function countLegs(chicken, cow, pig) {
  chickenLegs = chicken * 2;
  cowLegs = cow * 4;
  pigLegs = pig * 4;
  return chickenLegs + cowLegs + pigLegs;
}

console.log(countLegs(2, 3, 5));
console.log(countLegs(1, 2, 3));
console.log(countLegs(5, 2, 8));
