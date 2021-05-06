function printAfter(func) {
  console.log("hello world");
  return func();
}

const print = () => console.log("Elon Musk");

printAfter(print);
