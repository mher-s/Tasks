let arr = ["Houston", "Problem"];
let sentence = "_, we have a _.";
let index = 0;
let result = "";

for (let i of sentence) {
  if (i === "_") {
    i = arr[index];
    index++;
  }
  result += i;
}

console.log(result);
