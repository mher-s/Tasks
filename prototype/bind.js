Function.prototype.customBind = function (context, argsArr) {
  const key = "_tempFunc";
  context[key] = this;
  return function (...restArgs) {
    const result = context[key](argsArr, ...restArgs);
    delete context[key];
    return result;
  };
};

function foo(a, b, c) {
  this.a = a;
  return this;
}

console.log(foo.customBind({}, [1]));
console.log(foo.bind({}, [1]));

// Vrezh's solution