// CASE when we demand index 2, and the function gives us the value of position 2 on the array, its 8 

var array = [5, 12, 8, 130, 44];
var index = 2;

var res = at(array, index)

console.assert(res === 8)

// CASE when the index is bigger than array.length, the value is undefine (index = 6, res = undefine)

var array = [5, 12, 8, 130, 44];
var index = 6;

var res = at(array, index)

console.assert(res === undefined)


// CASE when the index is a negative number, and the number is not bigger than the array.length
//       (index = -1, res = 44)


var array = [5, 12, 8, 130, 44];
var index = -1;

var res = at(array, index)

console.assert(res === 44)


// CASE when de index is negative and bigger than the array.length
//       (index = -7, res , undefine)

var array = [5, 12, 8, 130, 44];
var index = -7;

var res = at(array, index)

console.assert(res === undefined)
