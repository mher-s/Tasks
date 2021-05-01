let userInput = prompt("Enter: ");

let numbers = /[0-9]/g;
let lettersUpper = /[A-Z]/g;
let lettersLower = /[a-z]/g;
let symbols = /[~,!,@,#,$,%,^,&,*,(,),_,+]/g;

if (
  userInput.match(numbers) &&
  userInput.match(lettersUpper) &&
  userInput.match(lettersUpper) &&
  userInput.match(symbols)
) {
  console.log("valid");
} else {
  console.log("Invalid");
}
