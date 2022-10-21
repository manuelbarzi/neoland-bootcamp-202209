// CASE we add two arrays in a new one

var array1 = ['Hola', 'como', 'estas']
var array2 = ['estoy', 'muy', 'bien']


var result = concat(array1, array2)

console.assert(array1.length === array2.length)

console.assert(result[0] === array1[0])
console.assert(result[1] === array1[1])
console.assert(result[2] === array1[2])
console.assert(result[3] === array2[0])
console.assert(result[4] === array2[1])
console.assert(result[5] === array2[2])