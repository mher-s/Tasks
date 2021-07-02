function addBracket(str) {
  let mainLength = str.length;
  let res = [];

  function inner(iStr) {
    [head, ...tail] = iStr;
    if (res.length < mainLength / 2) {
      res.push(head + "(");
    } else {
      res.push(head + ")");
    }
    if (res.length === mainLength) {
      return res;
    }
    return inner(tail);
  }
  return inner(str);
}

console.log(addBracket("LItBeoFLcSGBOFQxMHoIuDDWcqcVgkcRoAeocXO").join(""));
