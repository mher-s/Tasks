function checkAllNumsEven(from, to) {
  let resultArr = [];

  for (let i = from; i <= to; i++) {
    let isEven = true;
    let arr = String(i).split("");

    for (let j = 0; j < arr.length; j++) {
      if (Number(arr[j]) % 2 === 1) {
        isEven = false;
      }
    }
    if (isEven) {
      resultArr.push(i);
    }
  }
  return resultArr;
}

console.log(checkAllNumsEven(19, 42));
// checkAllNumsEven(99, 199);
