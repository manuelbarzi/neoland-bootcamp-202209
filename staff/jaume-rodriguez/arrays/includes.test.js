// CASE 1 returns true for the array [1, 2, 3] with a number value 2

var iArray = [1, 2, 3]

var result = includes(iArray, 2)

// CASE 1.2 returns true for the array ['a', 'b', 'c']
// with a string value 'c'

var iArray2 = ['a', 'b', 'c']

var result = includes(iArray2, 'c')

// CASE 1.3 returns false for the array ['cat', 'dog', 'bird']
// with a string value 'at'

var iArray3 = ['cat', 'dog', 'bird']

var result = includes(iArray3, 'at')

// CASE 2 returns true for the array ['a', 'b', 'c']
//with a string value 'a' and an index 2

var iArray4 = ['a', 'b', 'c']

var result = includes(iArray4, 'c', 2)

// CASE 3 returns false for the array ['a', 'b', 'c']
// with a string value 'c' and an index greater or equal to array.length

var iArray5 = ['a', 'b', 'c']

var result = includes(iArray5, 'c', 3)

// CASE 4 returns true for the array ['a', 'b', 'c', 'd'] 
// with a string value 'd' and a negative computed index + array.length
// to be used as a position from right to left

var iArray6 = ['a', 'b', 'c', 'd']

var result = includes(iArray6, 'd', -1)

// CASE 5 returns true for the array ['a', 'b', 'c'] 
// with a string value 'c' and a negative computed index + array.length
// less than or equal to 0

var iArray7 = ['a', 'b', 'c']

var result = includes(iArray7, 'c', -100)