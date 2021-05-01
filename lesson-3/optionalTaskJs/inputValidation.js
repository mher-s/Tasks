let userInput = prompt("Enter: ");

let numbers = /[0-9]/g;
let letters = /[A-Z a-z]/g;
let symbols = /[~,!,@,#,$,%,^,&,*,(,),_,+]/g;

if (userInput === numbers) {
  console.log("valid");
}
