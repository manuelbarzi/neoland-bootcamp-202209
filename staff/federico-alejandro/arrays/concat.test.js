var arr = ['a', 'b', 'c']
var arr2 = ['d', 'e', 'f']

var arr3 = concat(arr, arr2)

console.assert(arr3.length === 6 )
console.assert(arr3[0] === 'a' )
console.assert(arr3[1] === 'b' )
console.assert(arr3[2] === 'c' )
console.assert(arr3[3] === 'd' )
console.assert(arr3[4] === 'e' )
console.assert(arr3[5] === 'f' )

console.assert(arr.length === 3 )
console.assert(arr[0] === 'a' )
console.assert(arr[1] === 'b' )
console.assert(arr[2] === 'c' )

console.assert(arr2.length === 3 )
console.assert(arr2[0] === 'd' )
console.assert(arr2[1] === 'e' )
console.assert(arr2[2] === 'f' )

