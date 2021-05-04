function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    sum += element;
  }
  return sum;
}

function difference(array) {
  let difference = array[0];
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    difference -= element;
  }
  return difference;
}

function multi(array) {
  let multiplication = 1;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    multiplication *= element;
  }
  return multiplication;
}

function division(array) {
  let division = array[0];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    division /= element;
  }
  return division;
}

function chooseOperation(array, operator) {
  if (operator === "+") {
    return sum(array);
  } else if (operator === "-") {
    return difference(array);
  } else if (operator === "*") {
    return multi(array);
  } else {
    return division(array);
  }
}

console.log(
  chooseOperation(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    prompt("Enter operation (+, -, * or /)")
  )
);
