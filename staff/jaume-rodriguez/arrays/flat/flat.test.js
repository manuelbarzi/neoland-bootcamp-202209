// CASE 1 returns a hole new array with all sub-array elements concatenated
// [0, 3, 8, 1, 9]

var flArray1 = [0, 3, 8, [1, 9]];

var result = flat(flArray1)

console.assert(flArray1 instanceof Array)
console.assert(flArray1[0] === 0)
console.assert(flArray1[1] === 3)
console.assert(flArray1[2] === 8)
console.assert(flArray1[3] === 1, 9)
console.assert(result[0] === 0)
console.assert(result[1] === 3)
console.assert(result[2] === 8)
console.assert(result[3] === 1)
console.assert(result[4] === 9)