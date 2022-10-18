// CASE 1 returns a hole new array with all sub-array elements concatenated
// [0, 3, 8, 1, 9]

var flArray1 = [0, 3, 8, [1, 9]];

var result = flat(flArray1)

//CASE succes with 2 levels of arrays

var numbers1 = [1, [2, 3], [4, [5, 6]], 7]

var result1 = flat(numbers1)

console.log(flat(numbers1[2]))