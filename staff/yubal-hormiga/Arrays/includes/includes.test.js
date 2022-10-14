//!arriy.includes().The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
//*CASE.1 includes 2 in array [1, 2, 3]

var array1 = [1, 2, 3];

var res=  includes(array1, 3)

console.assert(res === true )

//*CASE.2 includes cat in array [1, 2, 3, cat]

var array1 = [1, 2, 3, 'cat'];

var res=  includes(array1, 'tac')

console.assert(res == false )

//*CASE.3  The position in this array at which to begin  searchElement.includes(Array,searchElement, fromIndex)
var array1 = [1, 2, 3];

var res=  includes(array1, 3,3)

console.assert(res === false )

// //* CASE.4 IS computed index is less than or equal to 0, the entire array will be searched.
var array1 = [1, 2, 3];

var res=  includes(array1, 3,-4)

console.assert(res === true)

// //? CASE.5 If fromIndex is negative, the computed index is calculated ARRAY.LENGTH - FROMINDEX 
// var array1 = [1, 2, 3];

// var res=  includes(array1, 2 ,-3)

// console.assert(res === false)