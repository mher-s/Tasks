function myParseInt(str) {
  str = str.trim();
  let result = "";
  let sign = "";

  if (str.charAt(0) === "-") {
    sign = str.slice(0, 1);
    str = str.slice(1);
  }

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      result = result += str[i];
    } else if (result.length) {
      return Number(sign + result);
    } else {
      return NaN;
    }
  }
  return sign + result;
}

console.log(myParseInt("1231"));
