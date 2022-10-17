// CASE  array with numnbers and includes the index

var array = [3, 5, 7, 10]
var index = 7
// var fromIndex

var result = includes(array, index)

console.assert(result === 'true')



// CASE array with numbers, without the number from the index 

var array = [3, 5, 7, 10]
var index = 2

var result = includes(array, index)

console.assert(result === 'false')



// CASE array with strings ('true')

var array = ['hola', 'como', 'estas', 'yo', 'estoy', 'bien']
var index = 'yo'

var result = includes(array, index)

console.assert(result === 'true')



// CASE array with strings('false')

var array = ['hola', 'como', 'estas', 'yo', 'estoy', 'bien']
var index = 'camion'

var result = includes(array, index)

console.assert(result === 'false')



// CASE array with strings and numbers

var array = ['hola', 55, 'estas', 'yo', 'estoy', 'bien']
var index = 55

var result = includes(array, index)

console.assert(result === 'true')



// CASE with an empty array

var array = []
var index = 55

var result = includes(array, index)

console.assert(result === 'false')


// CASE without index

var array = [3, 5, 7, 10]
var index = ''

var result = includes(array, index)

console.assert(result === 'false')


// CASO with from index

var array = [3, 5, 7, 10,5]
var index = 5
var fromIndex = 2

var result = includes(array, index, fromIndex)

console.assert(result === 'true')


// CASE with from index

var array = [3, 5, 7, 10,5]
var index = 3
var fromIndex = 2

var result = includes(array, index, fromIndex)

console.assert(result === 'false')


// CASE with fromIndex bigger than array.length

var array = [3, 5, 7, 10,5]
var index = 3
var fromIndex = 6

var result = includes(array, index, fromIndex)

console.assert(result === 'false')



//CASE with fromIndex negative bigger than the array.length


var array = ['hola', 'como', 'estas', 'yo', 'estoy', 'bien']
var index = 'yo'
var fromIndex = -9

var result = includes(array, index, fromIndex)

console.assert(result === 'true')



//CASE with fromIndex negative lower than the array.length
// -------('FALSE')

var array = ['hola', 'como', 'estas', 'yo', 'estoy', 'bien']
var index = 'como'
var fromIndex = -4

var result = includes(array, index, fromIndex)

console.assert(result === 'false')



//CASE with fromIndex negative lower than the array.length
//---------('TRUE')

var array = ['hola', 'como', 'estas', 'yo', 'estoy', 'bien']
var index = 'como'
var fromIndex = -5

var result = includes(array, index, fromIndex)

console.assert(result === 'true')





