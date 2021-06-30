let askForName = prompt("What is your name");
let reAskName = confirm("Are u sure ?");

if (reAskName === true) {
  alert(askForName);
} else {
  let askForNameAgain = prompt("What is your name");
  alert(askForNameAgain);
}
