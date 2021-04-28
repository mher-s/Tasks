// with .
function randomNum(min, max) {
  let randomNumber = Math.random() * 10;
  console.log(randomNumber);
}

randomNum(1, 10);

// without .
function randomNum(min, max) {
  let randomNumber = Math.floor(Math.random() * 10);
  console.log(randomNumber);
}

randomNum(1, 10);