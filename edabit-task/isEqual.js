function isEqual(firstNum, secondNum) {
    if (firstNum === secondNum) {
        return true 
    } else {
        return false
    }
}

console.log(isEqual(4, 8)) // ➞ false
console.log(isEqual(2, 2)) // ➞  true
console.log(isEqual(2, "2")) // ➞ false