let array = [1, "10", "hi", 2, 3];

let countNum = 0;
let countString = 0;

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === "number") {
    countNum++;
  }
  if (typeof array[i] === "string") {
    countString++;
  }
}
console.log('Numbers: ' + countNum);
console.log('Strings: ' + countString);
