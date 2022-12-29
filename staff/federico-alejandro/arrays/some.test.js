//Devuelve true poque uno de los elementos cumple con la condicion 
var numbers = [ 12, 20, 34, 15]

var isEqual = function(currentValue){ 
   return currentValue === 20
}

var res = some(numbers, isEqual)

console.assert(res === true)

// Flase porque ningun elemento cumple con la condicion
var numbers = [11, 25, 37, 43]

var evenNumbers = function (num) {
   return num % 2 === 0
}

var result = some(numbers, evenNumbers)

console.assert(result === false)