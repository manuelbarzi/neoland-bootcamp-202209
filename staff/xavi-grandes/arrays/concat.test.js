// Sintaxis concat(value0, value1)
// CASE 1: concat 2 arrays into a new one

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

var result = concat (array1, array2)

console.assert(result instanceof Array)
console.assert(result.length === 6)
console.assert(result[0] === 'a')
console.assert(result[1] === 'b')
console.assert(result[2] === 'c')
console.assert(result[3] === 'd')
console.assert(result[4] === 'e')
console.assert(result[5] === 'f')

// CASE 1: concat 3 arrays into a new one

const array3 = ['g', 'h', 'i'];

var result = concat (array1, array2, array3)

console.assert(result instanceof Array)
console.assert(result.length === 9)
console.assert(result[0] === 'a')
console.assert(result[1] === 'b')
console.assert(result[2] === 'c')
console.assert(result[3] === 'd')
console.assert(result[4] === 'e')
console.assert(result[5] === 'f')
console.assert(result[6] === 'g')
console.assert(result[7] === 'h')
console.assert(result[8] === 'i')

console.assert(array1[0] === 'a')
console.assert(array1[1] === 'b')
console.assert(array1[2] === 'c')