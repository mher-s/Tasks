let number = 5;
let facNum = 0;
let factorialCount;
let factorial = 1;

while (facNum < number) {
  factorialCount = number - facNum;
  facNum++;
  factorial *= factorialCount;
}
 console.log(factorial);
