function fromLastToFirstEveryThird(str) {
  let result = "";
  for (let i = 0; i < str.length; i += 3) {
    if (str[i + 2]) {
      result += str[i + 1] + str[i + 2] + str[i];
    } else {
      result += str.slice(i);
    }
  }
  console.log(result);
}

fromLastToFirstEveryThird("qwertyss");
