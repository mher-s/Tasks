let numberBaseTen = 163;
let baseTwoSystem = "";

while (numberBaseTen !== 0) {
  baseTwoSystem += numberBaseTen % 2;
  numberBaseTen = Math.floor(numberBaseTen / 2);
}
readFromEnd = Number(baseTwoSystem.split('').reverse().join(''));
console.log(readFromEnd);
