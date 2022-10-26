//CASE hacer otro array con los valores de array1 y array2
array1 = ['a', 'b', 'c']
array2 = ['d', 'e', 'f']

array3 = concat(array1, array2)

console.assert(array3.length === 6)
console.assert(array3[0] === array1[0])
console.assert(array3[1] === array1[0])
console.assert(array3[2] === array1[0])
console.assert(array3[0] === array2[0])
console.assert(array3[1] === array2[0])
console.assert(array3[2] === array2[0])

