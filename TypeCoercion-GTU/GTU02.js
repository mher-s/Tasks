var a = {
  valueOf: function () {
    return "hello";
  },
};
var b = {
  valueOf: function () {
    return 3;
  },
};
var c = {
  valueOf: function () {
    return new Number(3);
  },
};
var d = {
  toString: function () {
    return 123;
  },
};
var e = {
  toString: function () {
    return new Number(3);
  },
};

// console.log(null + undefined);// i guess || NaN
// console.log(null + true);// i guess 1 || 1
// console.log(null + false); // i guess 0 || 0
// console.log(null + 3); // i guess 3 || 3
// console.log(null + NaN); // i guess NaN || NaN
// console.log(null + "hello"); // i guess NaN || nullhello
// console.log(null + a + b + c + d + e + f); // first of all f not defined so never work || error e
// console.log(true + false);// i guess 1 || 1
// console.log(true + 2);// i guess 3 || 3
// console.log(true + NaN); i guess NaN || NaN
// console.log(true + "hello"); // i guess truehello || truehello
// console.log(true + a + b + c + d + e + f); // i guess error e cant convert || error e
// console.log(false + 4); // i guess 4 || 4
// console.log(false + NaN); // i guess NaN  || NaN
// console.log(false + "hello"); // i guess falsehello || falsehello
// console.log(false + a + b + c + d + e + f); // i guess again cant convert || error e
// console.log(5+3) // i guess 8 || 8
// console.log(5 + NaN); // i guess NaN || NaN
// console.log(5 + "hello"); // i guess 5hello || 5hello
// console.log(5 + a + b + c + d + e + f); // i guess again cant convert || error e
// console.log('hello' + NaN) // i guess helloNaN || helloNaN
// console.log("hello" + a + b + c + d + e + f); // i guess helloabcdef || error e
// console.log(-null) // -0 || 0
// console.log(-undefined); // i guess NaN || NaN
// console.log(-true); // i guess -1 || -1
// console.log(-0); // i guess -0 || -0
// console.log(-5) // i guess -5 || -5
// console.log(-"hello"); // i guess NaN || NaN
// console.log(-"234"); // i guess -234 || -234
// console.log(-"234.32e3"); // i just guess it will be number || -234320
// console.log(-new Number(NaN)); // i dont know what the hack did -new but i still guess NaN || NaN
// console.log(-new String("hello")); // i dont know what the hack did -new but i still guess NaN || NaN
// console.log(-/google.com/); // guess NaN || NaN
// console.log(-[]); // i guess undefined || -0
// console.log(-[2]); // i guess -2  || -2
// console.log(-[2, 3]); // cant guess || NaN
// console.log(-function () {}); // cant guess || NaN
// console.log(-a); // cant guess || NaN
// console.log(234 % 2); // guess 0 || 0
// console.log(234 % 3); // guess 0 || 0
// console.log(23.23 % 2 === 1.23); // guess true || false
// console.log(234.23 % 2.223); // cant guess || 0.8150000000000039
