let arr = ["Houston", "Problem"];
let sentence = "_, we have a _.";
let count = [];

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === "_") {
    count.push(sentence[i]);
    sentence.replace(count,arr)
  }
}

console.log(sentence);
