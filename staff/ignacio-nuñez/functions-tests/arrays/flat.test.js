//CASE succes with 2 levels of arrays
var numbers1 = [1, [2, 3], [4, [5, 6]], 7]

var result1 = flat(numbers1, 2)

// console.assert(numbers1[0] === 1) 
// console.assert(numbers1[1] === 2) 
// console.assert(numbers1[2] === 3) 
// console.assert(numbers1[3] === 4) 
// console.assert(numbers1[4] === 5) 
// console.assert(numbers1[5] === 6) 
// console.assert(numbers1[6] === 7) 

console.assert(result1[0] === 1) 
console.assert(result1[1] === 2) 
console.assert(result1[2] === 3) 
console.assert(result1[3] === 4) 
console.assert(result1[4] === 5) 
console.assert(result1[5] === 6) 
console.assert(result1[6] === 7) 

//CASE succes with 3 levels of arrays
var numbers2 = [1, [2, 3], [4, [5, [6]]], 7]

var result2 = flat(numbers2, 3)

console.assert(result2[0] === 1) 
console.assert(result2[1] === 2) 
console.assert(result2[2] === 3) 
console.assert(result2[3] === 4) 
console.assert(result2[4] === 5) 
console.assert(result2[5] === 6) 
console.assert(result2[6] === 7) 

//CASE succes with 1 level of arrays
var numbers3 = [1, 2, [3, 4], 5, 6, 7]

var result3 = flat(numbers3, 3)

console.assert(result3[0] === 1) 
console.assert(result3[1] === 2) 
console.assert(result3[2] === 3) 
console.assert(result3[3] === 4) 
console.assert(result3[4] === 5) 
console.assert(result3[5] === 6) 
console.assert(result3[6] === 7) 

//CASE succes with 3 level of arrays and down it 1 level
var numbers4 = [1, [2, 3], [4, [5, [6]]], 7]

var result4 = flat(numbers4)

console.assert(result4[0] === 1) 
console.assert(result4[1] === 2) 
console.assert(result4[2] === 3) 
console.assert(result4[3] === 4) 
console.assert(result4[4][0] === 5) 
console.assert(result4[4][1][0] === 6) 
console.assert(result4[5] === 7) 


//CASE succes with 3 level of arrays and down it infinity level
// var numbers5 = [1, [2, 3], [4, [5, [6]]], 7]

// var result5 = flat(numbers5, Infinity)

// console.assert(result5[0] === 1) 
// console.assert(result5[1] === 2)     
// console.assert(result5[2] === 3) 
// console.assert(result5[3] === 4) 
// console.assert(result5[4] === 5) 
// console.assert(result5[5] === 6) 
// console.assert(result5[6] === 7) 

//CASE succes with 5 level of arrays and down it 3 level
var numbers6 = [[1, 3,[4, 5, [6, 7, [8, 9, [10, 11]]]], 12]]

var result6 = flat(numbers6, 3)

console.assert(result6[0] === 1) 
console.assert(result6[1] === 3)     
console.assert(result6[2] === 4) 
console.assert(result6[3] === 5) 
console.assert(result6[4] === 6) 
console.assert(result6[5] === 7) 
console.assert(result6[6][0] === 8) 
console.assert(result6[6][1] === 9) 
console.assert(result6[6][2][0] === 10)
console.assert(result6[6][2][1] === 11) 
console.assert(result6[7] === 12) 