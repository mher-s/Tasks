function addSuffix(suffix) {
  return function (word) {
    return word + suffix;
  };
}

add_ly = addSuffix("ly");
add_ly("hopeless"); // "hopelessly"
console.log(add_ly("hopeless"));
console.log(add_ly("total")); // "totally"

add_less = addSuffix("less");
console.log(add_less("fear")); // "fearless"
console.log(add_less("ruth")); // "ruthless"
