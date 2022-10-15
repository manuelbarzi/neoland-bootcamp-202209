// CASE 1 returns ["a", "b", "c", "d", "e", "f"] from the arrays ['a', 'b', 'c'] and ['d', 'e', 'f'] being merge

var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

var array3 = concat(array1, array2)

console.assert(array3 instanceof Array)
console.assert(array3.length === 6)
console.assert(array3[0] === 'a')
console.assert(array3[1] === 'b')
console.assert(array3[2] === 'c')
console.assert(array3[3] === 'd')
console.assert(array3[4] === 'e')
console.assert(array3[5] === 'f')

// CASE 2 returns ["a", "b", "c", "d", "e", "f", true, 30, null] from the arrays below being all merged

var array4 = ['a', 'b', 'c'];
var array5 = ['d', 'e', 'f'];
var array6 = [true];
var array7 = [30, null];

var array8 = concat(array4, array5, array6, array7)

console.assert(array8 instanceof Array)
console.assert(array8.length === 9)

// CASE 3 returns ["a", "b", "c", "1", "2", "3"] from the array9 + [1, [2, 3] numbers]

var array9 = ['a', 'b', 'c']

var array10 = concat(array9, 1, [2, 3])

console.assert(array10 instanceof Array)
console.assert(array10.length === 6)
console.assert(array10[0] === 'a')
console.assert(array10[1] === 'b')
console.assert(array10[2] === 'c')
console.assert(array10[3] === 1)
console.assert(array10[4] === 2)
console.assert(array10[5] === 3)