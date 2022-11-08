// CASE 1 returns 'c' as a last element and deleted 
// element from the array ['a', 'b', 'c']

var poArray1 = ['a', 'b', 'c']

var result = pop(poArray1)

console.assert(result === 'c')
console.assert(poArray1.length === 2)
console.assert(poArray1[0] === 'a')
console.assert(poArray1[1] === 'b')