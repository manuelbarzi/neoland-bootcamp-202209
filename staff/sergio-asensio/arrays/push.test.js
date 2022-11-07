// CASE add a new element to the array

var array = ['Hola', 'mundo']
var element = 'loco'


res = push(array, element)

console.assert(res === 3)

console.assert(array[0] === 'Hola')
console.assert(array[1] === 'mundo')
console.assert(array[2] === 'loco')



// CASE add an Array into the main array

var array = ['Hola', 'mundo']
var element = ['loco', 'crazy']

res = push(array,element)

console.assert(res === 3)

console.assert(array[0] === 'Hola')
console.assert(array[1] === 'mundo')
console.assert(array[2] === Array(2))


