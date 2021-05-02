let str = "BRUH....";
let strToArr = str.split("");
let lettersLower = /[A-Z]/g;

if (strToArr[0] !== lettersLower) {
  let firstLetter = strToArr[0].toLowerCase();
  strToArr.shift();
  strToArr.unshift(firstLetter);
}
console.log(strToArr.join(""));
