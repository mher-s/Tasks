function changeEnough(arr, cash) {
  let quarterToDollar = arr[0] * 25; // 1st index is quarter = 25 cents = $0.25
  let dimeToDollar = arr[1] * 10; // 2nd index is dime = 10 cents = $0.10
  let nickelToDollar = arr[2] * 5; // 3nd index is nickel = 5 cents = $0.05
  let pennyToDollar = arr[3] * 1; // 4nd index is penny = 1 cents = $0.01
  let needAmount =
    (quarterToDollar + dimeToDollar + nickelToDollar + pennyToDollar) / 100;
  //   console.log(needAmount);
  //   console.log(needAmount);
  if (needAmount >= cash) {
    return true;
  }
  return false;
}

console.log(changeEnough([2, 100, 0, 0], 14.11)); // ➞ false
console.log(changeEnough([0, 0, 20, 5], 0.75)); // ➞ true
console.log(changeEnough([30, 40, 20, 5], 12.55)); // ➞ true
console.log(changeEnough([10, 0, 0, 50], 3.85)); // ➞ false
console.log(changeEnough([1, 0, 5, 219], 19.99)); // ➞ false
