//! array.at().The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.
//*CASE 1 returns 'h' for array [5, 12, 8, 130, 44] at index 2

var s = [5, 12, 8, 130, 44]

var res = at(s, 0)

console.assert(res === 5)

//*CASE 2 returns 8 for array [5, 12, 8, 130, 44] at index 2
var s = [5, 12, 8, 130, 44]

var res = at(s, -2)

console.assert(res === 130)


