function redundant(str) {
  return function () {
    return str;
  };
}

const f1 = redundant("apple");
console.log('esim e');
//f1() ➞ "apple"
const f2 = redundant("pear");
console.log('eli esim');

//f2() ➞ "pear"
const f3 = redundant("");
console.log('u eli esim');

//f3() ➞ ""
