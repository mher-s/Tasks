function checkTag(str) {
  let regex = /(<\w.*?)>/g;
  return str.match(regex);
}

console.log(checkTag('<a href="/">'));
console.log(checkTag('<input type="radio" checked>'));
console.log(checkTag("<b>"));
console.log(checkTag("<>"));
