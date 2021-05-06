function checkArrLength(arr) {
  for (let checkInner = 0; checkInner < arr.length; checkInner++) {
    if (typeof checkInner !== "object") {
      return "Invalid argument";
    }
  }
  return checkArrNegative(arr);
}

function checkArrNegative(arr) {
  count = 0;
  positiveNumbers = [];
  for (let innerArray of arr) {
    for (let innerArrayNum of innerArray) {
      count++;
      if (innerArrayNum >= 0) {
        positiveNumbers.push(innerArrayNum);
      }
    }
  }
  if (count === positiveNumbers.length) {
    return "No negatives";
  }
  return logic(arr);
}

function logic(arr) {
  let product = 1;
  for (let innerArray of arr) {
    for (let innerArrayNum of innerArray) {
      if (innerArrayNum < 0 && innerArrayNum > Math.min(...innerArray)) {
        product *= innerArrayNum;
      }
    }
  }
  return product;
}

function resultOutput(arr) {
  return checkArrLength(arr);
}

console.log(resultOutput([[1, 2, 3]]));
