let array = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') {
        delete array[i]
    }    
}
console.log(array)