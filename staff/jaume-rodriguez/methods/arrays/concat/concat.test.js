// CASE 1 returns ["a", "b", "c", "d", "e", "f"] from the arrays ['a', 'b', 'c'] and ['d', 'e', 'f'] being merge

var ccArray1 = ['a', 'b', 'c'];
var ccArray2 = ['d', 'e', 'f'];

var ccArray3 = concat(ccArray1, ccArray2)

console.assert(ccArray3 instanceof Array)
console.assert(ccArray3.length === 6)
console.assert(ccArray3[0] === 'a')
console.assert(ccArray3[1] === 'b')
console.assert(ccArray3[2] === 'c')
console.assert(ccArray3[3] === 'd')
console.assert(ccArray3[4] === 'e')
console.assert(ccArray3[5] === 'f')

// CASE 2 returns ["a", "b", "c", "d", "e", "f", true, 30, null] from the arrays below being all merged

var ccArray4 = ['a', 'b', 'c'];
var ccArray5 = ['d', 'e', 'f'];
var ccArray6 = [true];
var ccArray7 = [30, null];

var ccArray8 = concat(ccArray4, ccArray5, ccArray6, ccArray7)

console.assert(ccArray8 instanceof Array)
console.assert(ccArray8.length === 9)

// CASE 3 returns ["a", "b", "c", "1", "2", "3"] from the ccArray9 + [1, [2, 3] numbers]

var ccArray9 = ['a', 'b', 'c']

var ccArray10 = concat(ccArray9, 1, [2, 3])

console.assert(ccArray10 instanceof Array)
console.assert(ccArray10.length === 6)
console.assert(ccArray10[0] === 'a')
console.assert(ccArray10[1] === 'b')
console.assert(ccArray10[2] === 'c')
console.assert(ccArray10[3] === 1)
console.assert(ccArray10[4] === 2)
console.assert(ccArray10[5] === 3)