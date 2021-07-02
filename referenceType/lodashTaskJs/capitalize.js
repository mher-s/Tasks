let str = "mher";
let strToArr = str.split("");
let lettersLower = /[a-z]/g;

if (strToArr[0] !== lettersLower) {
  let firstLetter = strToArr[0].toUpperCase();
  strToArr.shift();
  strToArr.unshift(firstLetter);
}
console.log(strToArr.join(''));
