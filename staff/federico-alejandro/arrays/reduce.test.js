// Valor inicial 0, la suma del array nos da 10 
var numbers = [1, 2, 3, 4]
var sumWithInitial = reduce(numbers, (previousValue, currentValue) => previousValue + currentValue)

 console.assert(sumWithInitial === 10)

// Valor inicial 10, da como resultado 20
var numbers = [1, 2, 3, 4]
var initialValue = 10

var sumWithInitial = reduce(numbers, (previousValue, currentValue) => previousValue + currentValue, initialValue)

 console.assert(sumWithInitial === 20)

// Comienza con un valor inicial negativo -7
var numbers = [1, 2, 3, 4]
var initialValue = -7

var sumWithInitial = reduce(numbers, (previousValue, currentValue) => previousValue + currentValue, initialValue)

 console.assert(sumWithInitial === 3)

//  Valor inicial -20, nos devuelve un resultado negativo
var numbers = [1, 2, 3, 4]
var initialValue = -20

var sumWithInitial = reduce(numbers, (previousValue, currentValue) => previousValue + currentValue, initialValue)

 console.assert(sumWithInitial === -10)



var nums = [10, 20, 30]
var res = reduce(nums, (previousValue, currentValue) => previousValue - currentValue)

console.assert(res === -40)

// No se ingresa array

var nums = [10, 20, 30, 40]
var res = function(num) {console.log(num)}

var _error

try{
    reduce(res)

} catch(error) {

    _error = error
}

console.assert(_error instanceof TypeError)
console.assert(_error.message === 'function(num) {console.log(num)} is not an array')
 
// No se ingresa una funcion 
var nums = [10, 20, 30, 40]
var res = function(num) {console.log(num)}

var _error

try{
    reduce(nums)

} catch(error) {
     _error = error
}
console.assert(_error instanceof TypeError)
console.assert(_error.message === 'undefined is not a function')