function removeDups(arr) {
  return [...new Set(arr)];
}

console.log(removeDups([1, 0, 1, 0])); // ➞ [1, 0]
console.log(removeDups(["The", "big", "cat"])); // ➞ ["The", "big", "cat"]
console.log(removeDups(["John", "Taylor", "John"])); // ➞ ["John", "Taylor"]