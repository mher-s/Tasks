let num = 41;
let sum = 0;
let multi = 1;
let numToString = String(num);
let strToArr = numToString.split("");

for (let i = 0; i < strToArr.length; i++) {
  numbers = Number(strToArr[i]);
  sum += numbers;
  multi *= numbers;
}
if (multi % sum === 0) {
    console.log(multi/sum)
} else if (multi === 0 || sum === 0) {
    console.log('Cannot calculate')
} else {
    console.log('num with .')
}

