let array = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
let arr = []

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
        arr.push(array[i])
    }    
}
console.log(arr)