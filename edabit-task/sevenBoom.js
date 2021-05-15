function sevenBoom(arr) {
  let seven = /[7]/g;
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    element = String(element);
    if (element.match(seven)) {
      return `BOOM! || ${element} contain 7`;
    }
  }
  return "There is no 7 in the array";
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 17, 8, 9]));
