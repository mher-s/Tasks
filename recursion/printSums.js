function subsetSums(arr, idx, length, sum) {
  if (idx > length) {
    console.log(sum + " ");
    return;
  }

  subsetSums(arr, idx + 1, length, sum + arr[idx]);

  subsetSums(arr, idx + 1, length, sum);
}

let arr = [5, 4, 3];
let n = arr.length;

subsetSums(arr, 0, n - 1, 0);