let userInput = prompt("Enter: ");
let arr = [];

for (let i = 0; i < userInput.length; i++) {
  if (!isNaN(userInput[i])) {
    arr.push(userInput[i]);
    console.log(Number(userInput));
    break;
  } else {
    console.log(NaN);
    break;
  }
}
