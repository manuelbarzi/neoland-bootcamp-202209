// CASE 1 returns 8 for the array [5, 12, 8, 130, 44] with an index 2

var array1 = [5, 12, 8, 130, 44]

var index = 2;

var result = at(array1, 2)

console.assert(result === 8)

// CASE 2 returns 130 for the array [5, 12, 8, 130, 44] with an index negative -2

var array1 = [5, 12, 8, 130, 44]

var index = -2;

var result = at(array1, -2)

console.assert(result === 130)

// CASE 3 returns 5 for the array [5, 12, 8, 130, 44] when index is undefined

var array1 = [5, 12, 8, 130, 44]

var result = at(array1)

console.assert(result === 5)