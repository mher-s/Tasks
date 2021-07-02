let digit = 7,
  number = 123456;

let digitToString = String(digit)
let numToString = String(number)
let stingToArr = numToString.split('')
console.log(stingToArr);
if (stingToArr.includes(digitToString)) {
    console.log('yes')
} else {
    console.log('no')
}