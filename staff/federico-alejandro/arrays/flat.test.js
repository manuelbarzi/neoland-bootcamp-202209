// caso con 2 niveles de arrays
var numbers1 = [1, [2, 3], [4, [5, 6]], 7]
var result1 = flat(numbers1, 2)

console.assert(result1[0] === 1) 
console.assert(result1[1] === 2) 
console.assert(result1[2] === 3) 
console.assert(result1[3] === 4) 
console.assert(result1[4] === 5) 
console.assert(result1[5] === 6) 
console.assert(result1[6] === 7)

// Con 3 niveles de array
var numbers2 = [1, [2, 3], [4, [5, [6]]], 7]
var result2 = flat(numbers2, 3)

console.assert(result2[0] === 1) 
console.assert(result2[1] === 2) 
console.assert(result2[2] === 3) 
console.assert(result2[3] === 4) 
console.assert(result2[4] === 5) 
console.assert(result2[5] === 6)
console.assert(result2[6] === 7)

// 1 nivel de array
var numbers3 = [1, 2, [3, 4], 5, 6, 7]
var result3 = flat(numbers3, 3)

console.assert(result3[0] === 1)
console.assert(result3[1] === 2)
console.assert(result3[2] === 3)
console.assert(result3[3] === 4)
console.assert(result3[4] === 5)
console.assert(result3[5] === 6)
console.assert(result3[6] === 7)

// succes with 3 level of arrays and down it 1 level
var numbers4 = [1, [2, 3], [4, [5, [6]]], 7]
var result4 = flat(numbers4)

console.assert(result4[0] === 1)
console.assert(result4[1] === 2)
console.assert(result4[2] === 3)
console.assert(result4[3] === 4)
console.assert(result4[4][0] === 5)
console.assert(result4[4][1][0] === 6)
console.assert(result4[5] === 7)

// CASE succes with 5 level of arrays and down it 3 level
var numbers5 = [[1,3, [4, 5, [6, 7, [8, 9, [10, 11]]]], 12]]
var result5 = flat(numbers5, 3)

console.assert(result5[0] === 1)
console.assert(result5[1] === 3)
console.assert(result5[2] === 4)
console.assert(result5[3] === 5)
console.assert(result5[4] === 6)
console.assert(result5[5] === 7)
console.assert(result5[6][0] === 8) // posicion 6  del array [8,9,10,11]  y posicion 0 del sub-array [8,9,10,11]
console.assert(result5[6][1] === 9) // posicion 6 del array y 1 del sub-array [8,9..]
console.assert(result5[6][2][0] === 10)// posicion 6 del array y 2 del sub-array [8,9,10..]
console.assert(result5[6][2][1] === 11)
console.assert(result5[7] === 12)
