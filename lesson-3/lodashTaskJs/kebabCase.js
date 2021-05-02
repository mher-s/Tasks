let str = "CamelCase";

let strToKebabCase = str
  .toLowerCase()
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, "-"); 

console.log(strToKebabCase);