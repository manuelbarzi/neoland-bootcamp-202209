//case
var numbers = [ 12, 20, 34, 15]

var isEqual = function(currentValue){ //callback
   return currentValue === 20
}



var res = some(numbers, isEqual)

console.assert(res === true)