# What is the output of the script?
```
let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
```
> alert( `hello ${1}` ); Will output ***hello 1*** 

>> alert( `hello ${"name"}` ); Will output hello name || Becasue ""

>>> alert( `hello ${name}` ); Will output hello Ilya