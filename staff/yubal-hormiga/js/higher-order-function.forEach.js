// CASE add all numbers into a result

// original in js (mdn)

var ns = [10, 20, 30, 40, 50]
var r = 0

ns.forEach(function(n) {
    r += n
})

console.assert(r === 150)
undefined

// my own implementation (standalone function)
function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var elem = array[i]

        callback(elem)
    }   
}

var ns = [10, 20, 30, 40, 50]
var r = 0
var addToResult = function(n) {
    r += n
}

forEach(ns, addToResult)

console.assert(r === 150)

undefined

// CASE multiply all numbers by 10 and accumulate into an array

var ns = [10, 20, 30, 40, 50]
var r = []

//function mulBy10AndPushIntoResult(n, i) {
var mulBy10AndPushIntoResult = function(n, i) {
    r[i] = n * 10
}

ns.forEach(mulBy10AndPushIntoResult)

console.assert(r[0] === 100)
console.assert(r[1] === 200)
console.assert(r[2] === 300)
console.assert(r[3] === 400)
console.assert(r[4] === 500)