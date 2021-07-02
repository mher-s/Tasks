function myForEach(arr, fn) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    fn(element, index, arr);
  }
}

myForEach(["q", "w", "e", "r", "t", "y"], (a, b) => {
  console.log(a + "s");
});
