//CASE add all numbers into a result

var ns = [10, 20, 30, 40, 50]
var r = 0

var addToResult = function(n) {
    r += n //  0 callback 
}

forEach(ns, addToResult) // llama al array y a la function ( reemplazo por callback)

console.assert(r === 150)

//CASE multiply all numbers by 10 and accumulate into an array

var ns = [10, 20, 30, 40, 50]
var r =[]

//function mulBy10AndPushInToResult(n, i) 
var mulBy10AndPushInToResult = function(n, i) {
    r[i] = n * 10
}

forEach(ns, mulBy10AndPushInToResult)

console.assert(r[0] === 100)
console.assert(r[1] === 200)
console.assert(r[2] === 300)
console.assert(r[3] === 400)
console.assert(r[5] === 500)

//CASE concatenate all characters into a string

var chars = ['i', 'l', 'o', 'v', 'e', 'c', 'o', 'd', 'e', '&', 't', 'd', 'd']
var s= ''

forEach(chars, function(char) {
    s += char
})

console.assert(s === 'ilovecode&tdd')

//CASE fails an no array input
var nums = [10, 20, 30]
var print = function(num) {console.log(num) }

var _error

try {
    forEach()
} catch (error) {
    _error = error
}

console.assert(_error instanceof TypeError)
console.assert(_error.message === 'undefined is not an array')

//CASE fails an no callback input

var nums = [10, 20, 30]
var print = function(num) { console.log(num) }

var _error

try { 
    forEach(nums)
} catch (error) {
    _error = error
}

console.assert(_error instanceof TypeError)
console.assert(_error.message === 'undefined is not a function')

