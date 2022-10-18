// CASE 1 returns a hole new array with all sub-array elements concatenated
// [0, 3, 8, 1, 9]

var flArray1 = [0, 3, 8, [1, 9]];

var result1 = flat(flArray1, 2)

//CASE 1.2 succes with 4 depth levels of arrays

flArray2 = [1, [2, 2], [2, [3, 3]], 1, [2, 2, [3, 3, [4, 4]], 2], 1]

var result2 = flat(flArray2, 3)