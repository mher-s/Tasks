Function.prototype.myApply = function (context, argsArr) {
  const key = "_tempFunc";
  context[key] = this;
  const result = context[key](...argsArr);
  // use case for defineProperties
  // Object.defineProperties(context, key, {
  //   enumerable: false,
  // });
  delete context[key];
  return this;
};

function foo(a, b, c) {
  this.a = a;
  return this;
}

// console.log(foo.myApply({}, [1]));
// console.log(foo.apply({}, [1]));

console.log(foo());

// Vrezh's solution