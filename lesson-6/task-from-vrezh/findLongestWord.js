function findLongestWord(str) {
  let strToArr = str.replace(/[~!@#$%^&*()_+-=:;.,?]/g, "").split(" ");

  let result = "";
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i].length >= result.length) {
      result = strToArr[i];
    }
  }
  return result;
}

console.log(
  findLongestWord(
    "A revolution without dancing is a revolution not worth having."
  )
);
console.log(
  findLongestWord(
    'Which would be worse - to live as a monster, orto die as a good man?'
  )
);
