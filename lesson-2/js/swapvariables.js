// With third variable

let c,
  a = 10,
  b = 3;

c = a * b;
a = c / a;
b = c / b;

console.log(a);
console.log(b);

// Without third variable

let a = 10,
  b = 3;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);
