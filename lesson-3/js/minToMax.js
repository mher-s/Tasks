let arr = [24, 18, 48];
let memory;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[i]) {
      memory = arr[j];
      arr[j] = arr[i];
      arr[i] = memory;
    }
  }
}
console.log(arr);
