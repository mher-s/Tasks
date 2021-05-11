let a = 3;
let b = 6;

let arr = [];
arr.push(a, b);

a = arr[1];
b = arr[0];

console.log(a); //6
console.log(b); //3
