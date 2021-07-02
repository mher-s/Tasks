function checkArrLength(arr) {
  for (let checkInner = 0; checkInner < arr.length; checkInner++) {
    if (!arr[checkInner]?.length) {
      return "Invalid argument";
    }
  }
  return checkArrNegative(arr);
}

function checkArrNegative(arr) {
  let count = 0;
  let positiveNumbers = [];
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
  
}

// function resultOutput(arr) {
//   return checkArrLength(arr);
// }

console.log(
  logic([
    [2, -9, -3, 0],
    [1, 2],
    [-4, -11, 0, -5],
  ])
);
