# Logical Operators

## Что выведет alert (ИЛИ)?
```
 alert( null || 2 || undefined );
 ```
 > 2 => 1st True


## Что выведет alert (ИЛИ)?
```
 alert( alert(1) || 2 || alert(3) );
 ```
 > Will alert 1 then 2 

## Что выведет alert (И)?
```
alert( 1 && null && 2 );
 ```
 > Null => 1st False


 ## Что выведет alert (И)?
```
 alert( alert(1) && alert(2));
 ```
 > Will alert 1 then undefined
> 
 ## Что выведет этот код?
```
alert( null || 2 && 3 || 4 );
 ```
> Will alert 3