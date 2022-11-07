// Case 1
{
    
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

let array3 = concat(array1, array2)

console.assert(array3.length === 6)
console.assert(array3[0] === array1[0])
console.assert(array3[1] === array1[1])
console.assert(array3[2] === array1[2])
console.assert(array3[3] === array2[0])
console.assert(array3[4] === array2[1])
console.assert(array3[5] === array2[2])

}

