// Sintaxis concat(value0, value1)

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

// Sintaxis concat(value0, value1)