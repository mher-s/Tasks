let userInput = prompt("Enter: ");
let firstChar;

for (let i = 0; i < userInput.length; i++) {
  if (!isNaN(userInput[i])) {
    console.log(Number(userInput));
    break;
  } else {
    console.log(NaN);
    break;
  }
}