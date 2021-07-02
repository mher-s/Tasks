let userInput = prompt("Enter: ");

for (let i = 0; i < userInput.length; i++) {
  if (!isNaN(userInput[i])) {
    console.log(Number(userInput));
    break;
  } else {
    console.log(NaN);
    break;
  }
}
