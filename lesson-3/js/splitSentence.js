const str = "May the force be with you.";
let subStr = "";
const arr = [];
for (let i = 0; i < str.length; i++) {
  if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
    subStr += str[i];
  } else if (str[i] === " " || str[i] === "!" || str[i] === ".") {
    arr.push(subStr);
    subStr = "";
  }
}
console.log(arr);
