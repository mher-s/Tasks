function checkAnagram(array, str) {
  let strToArr = str.split("").sort().join("");
  let anagramArr = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i].split("").sort().join("");
    if (element === strToArr) {
      anagramArr.push(array[i]);
    }
  }
  if (anagramArr.length === 0) {
    return "There is no anagram";
  } else {
    return anagramArr;
  }
}

console.log(checkAnagram(["qwerty", "s", "s"], "qwerty"));
