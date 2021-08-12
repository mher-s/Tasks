const customReduce = (arr, fn, initialState) => {
  let acc = typeof initialState === 'undefined' ? arr[0] : initialState;
  const startingIndex = typeof initialState === 'undefined' ? 1 : 0;

  for (let i = startingIndex; i < arr.length; i++) {
    const element = arr[i];
    acc = fn(acc, element, i, arr);
  }
  return acc;
};

const action = (acc, item, index, arr) => {
  return console.log(arr);
};

const initArr = [1, 2, 3, 4, 5];

console.log(customReduce(initArr, action, 0));
