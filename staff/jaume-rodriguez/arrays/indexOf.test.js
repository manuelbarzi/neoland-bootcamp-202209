// CASE 1 returns 1 for the array ['a', 'b', 'c'] with a string value 'b'

var array1 = ['a', 'b', 'c']

var result = indexOf(array1, 'b')

// CASE 2 returns 4 for the array ['a', 'b', 'c', 'd', 'b']
// with a string value 'b' and start from index 2

var array2 = ['a', 'b', 'c', 'd', 'b']

var result = indexOf(array2, 'b', 2)

// CASE 3 returns -1 for the array ['a', 'b', 'c', 'd', 'b']
// with a string value 'e' who does not exist inside the array

var array3 = ['a', 'b', 'c', 'd', 'b']

var result = indexOf(array3, 'e')

// CASE 4 returns -1 for the array ['a', 'b', 'c']
// with a string value 'a' and start from a computed 
// negative (index + array.length) 2

var array4 = ['a', 'b', 'c']

var result = indexOf(array4, 'a', -1)

// CASE 5 returns 1 for the array ['a', 'b', 'c']
// with a string value 'b' and start from a computed 
// (negative index + array.length) -97 converted to 0 
// because of the previous negative result

var array5 = ['a', 'b', 'c']

var result = indexOf(array5, 'b', -100)