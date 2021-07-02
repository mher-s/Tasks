function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}


let counter = makeCounter();   // Both are = to makeCounter() function
let counter2 = makeCounter(); //

console.log(counter()); // 0
console.log(counter()); // 1

console.log(counter2()); // 0
console.log(counter2()); // 1
