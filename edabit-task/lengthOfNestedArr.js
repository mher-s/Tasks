function getLength(arr) {
    let flatIt = arr.flat(Infinity)
    return flatIt.length
}


console.log(getLength([1, [2, 3]])) // ➞ 3
console.log(getLength([1, [2, [3, 4]]])) // ➞ 4
console.log(getLength([1, [2, [3, [4, [5, 6]]]]])) // ➞ 6
console.log(getLength([1, [2], 1, [2], 1])) // ➞ 5