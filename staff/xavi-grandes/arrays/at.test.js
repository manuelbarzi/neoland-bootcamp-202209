// array.at(index)

// CASE: when I demand index 2 the function give us the value 8 of the array.

var array = [5, 12, 8, 130, 44];
var index = 2;

var result = at(array, index)

console.assert(result === 8)

// CASE: when I demand index -2 the function starts from end and give us the value 130 of the array.

var array = [5, 12, 8, 130, 44];
var index = -2;

var result = at(array, index)

console.assert(result === 130)
