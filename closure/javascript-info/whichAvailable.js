function makeWorker() {
  let name = "Pete";

  return function () {
    console.log(name);
  };
}

let name = "John";
let work = makeWorker();
work();

///////////// Will return "Pete", variable name="pete" closest
