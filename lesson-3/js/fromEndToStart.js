let inputNum = prompt("Enter a number");
if (inputNum % 10 !== 0) {
  let lastPosNumber = inputNum % 10;
  let otherPosNumbers = Math.floor(inputNum / 10);
  console.log(Number(lastPosNumber + "" + otherPosNumbers));
} else {
    console.log(inputNum)
}
