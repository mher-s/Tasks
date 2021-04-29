function randomNum(min, max) {
  let randomNumber = Math.round(Math.random() * (max - min) + min);
  console.log(randomNumber);
}
randomNum(1, 10);
