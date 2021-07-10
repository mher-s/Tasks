var a = 0;

function foo(a, b, c = 2) {
  return ((this.a || 10) + a) / b + c;
}

const bound = foo.bind(this, -4, 3);
console.log(bound());
