// GTU 01

console.log(Number("0x77") === 0x77); // Will return true  || 0x 16base
console.log(Number("077") === 077); // Will return false   || 77 !== 63 || 63 cuz 10 base system
console.log(Number(" 12")); // Will return 12
console.log(isNaN("")); // Will return false || if NaN will return true
console.log(+""); // Will return 0 | ""-false false = 0
console.log(0.1 + 0.2 == 0.3); // Will return false || JS Magic || loss of precision
console.log(9007199254740992 + 1 == 9007199254740992); // JS Magic || loss of precision
console.log(9007199254740992 + 2 == 9007199254740992); // JS Magic || Only +1 and +0 do not sum || loss of precision
console.log(0 === +0); // Will return true
console.log(+0 === -0); // Will return true
console.log(1 / "2"); // Will return 0.5 cuz only + make string
console.log(1 / 0); // Will return Infinity
console.log(1 / -0); // Will return -Infinity
console.log(Infinity / 6); // Will return Infinity
console.log(Infinity / -256); // Will return -Infinity
console.log(Infinity / Infinity); // Will return  NaN
console.log(0 / 0); // Will return  NaN
console.log(+true); // Will return 1 true === 1
console.log(+false); // Will return 0 true === 0
console.log(+null); // Will return 0 cuz typeof null is object || null is false || false === 0
console.log(+undefined); // Will return NaN cuz typeof Undefined is Undefined
console.log(parseInt(".2")); // Will return NaN cuz . dont let him to find digit
console.log(parseInt("077a")); // Will return 77
console.log(parseInt("0x77a")); // will return number || 0x 16base
console.log(parseInt("I’m the best value - said Infinity.")); // will return NaN cant find number
console.log(parseFloat("I’m the best value - said Infinity.")); // will return NaN cant find number
console.log(parseInt("Infinity is the best value!")); // will return NaN cant find number
console.log(parseFloat("Infinity is the best value!")); // will return infinity
console.log(parseFloat("12.78ff")); // will return 12.78