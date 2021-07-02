console.log("" + 1 + 0); // Will return 10, cuz we have string near + || will return string
console.log("" - 1 + 0); // Will return -1, cuz we have - near string || Will return number
console.log(true + false); //Will return 1, cuz true = 1, false = 0
console.log(6 / "3"); // Will return 2, type number || return string only with +
console.log("2" * "3"); // Will return 6, type number || return string only with +
console.log(4 + 5 + "px"); // first will 4 + 5 = 9 then 9 + 'px' = 9px
console.log("$" + 4 + 5); // first will '$' + 4 = '$4' then '$4' + 5 = '$45'
console.log(4 - "2"); // Will return 2, type number || return string only with +
console.log("4px" - 2); // Will return NaN cant 4px - 2
console.log(7 / 0); // Will return infinity
console.log("-9" + 5); // Will return -95 || return string only with +
console.log("-9" - 5); // Will return -14 || return string only with +
console.log(null + 1); // Will return 1 like empty + 1 = 1
console.log(undefined + 1); // Will return NaN, can't sum with undefined
