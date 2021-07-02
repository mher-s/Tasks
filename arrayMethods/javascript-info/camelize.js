function camelize(str) {
  let strToWordsArr = str.split("-");
  let camelCaseArr = [];
  strToWordsArr.map(function (item, index) {
    if (index === 0) {
      camelCaseArr.push(item);
    } else {
      camelCaseArr.push(item[0].toUpperCase() + item.slice(1));
    }
  });
  return camelCaseArr.join("");
}

console.log(camelize("background-color")); // "backgroundColor";
console.log(camelize("list-style-image")); // "listStyleImage";
console.log(camelize("-webkit-transition")); // "WebkitTransition"
