function myMap(arr, fn) {
  let mapedArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    mapedArr.push(fn(element, index, arr));
  }
  return mapedArr;
}

myMap(["q", "w", "e", "r", "t", "y"], (a, b) => {
  console.log(a + "s");
});
