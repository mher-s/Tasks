let userInput = prompt("Enter: ");

for (let i = 0; i < userInput.length; i++) {
  if (!isNaN(userInput[i] && userInput[i] === ".")) {
    console.log(Number(Math.floor(userInput)));
    break;
  } else {
    console.log(NaN);
    break;
  }
}
