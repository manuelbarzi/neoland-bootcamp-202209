// CASE  array with numnbers and includes the element

var array = [3, 5, 7, 10]
var element = 7
// var fromIndex

var result = includes(array, element)

console.assert(result === 'true')



// CASE array with numbers, without the element 

var array = [3, 5, 7, 10]
var element = 2

var result = includes(array, element)

console.assert(result === 'false')



// CASE array with strings ('true')

var array = ['hola', 'como', 'estas', 'yo', 'estoy', 'bien']
var element = 'yo'

var result = includes(array, element)

console.assert(result === 'true')



// CASE array with strings('false')

var array = ['hola', 'como', 'estas', 'yo', 'estoy', 'bien']
var element = 'camion'

var result = includes(array, element)

console.assert(result === 'false')



// CASE array with strings and numbers

var array = ['hola', 55, 'estas', 'yo', 'estoy', 'bien']
var element = 55

var result = includes(array, element)

console.assert(result === 'true')



// CASE with an empty array

var array = []
var element = 55

var result = includes(array, element)

console.assert(result === 'false')


// CASE without index

var array = [3, 5, 7, 10]
var element = ''

var result = includes(array, element)

console.assert(result === 'false')


// CASO with  the elemente and fromIndex

var array = [3, 5, 7, 10,5]
var element = 5
var fromIndex = 2

var result = includes(array, element, fromIndex)

console.assert(result === 'true')


// CASE negaive  without element fromIndex

var array = [3, 5, 7, 10,5]
var element = 3
var fromIndex = 2

var result = includes(array, element, fromIndex)

console.assert(result === 'false')


// CASE with fromIndex bigger than array.length

var array = [3, 5, 7, 10,5]
var element = 3
var fromIndex = 6

var result = includes(array, element, fromIndex)

console.assert(result === 'false')



//CASE with fromIndex negative bigger than the array.length


var array = ['hola', 'como', 'estas', 'yo', 'estoy', 'bien']
var element = 'yo'
var fromIndex = -9

var result = includes(array, element, fromIndex)

console.assert(result === 'true')



//CASE with fromIndex negative lower than the array.length
// -------('FALSE')

var array = ['hola', 'como', 'estas', 'yo', 'estoy', 'bien']
var element = 'como'
var fromIndex = -4

var result = includes(array, element, fromIndex)

console.assert(result === 'false')



//CASE with fromIndex negative lower than the array.length
//---------('TRUE')

var array = ['hola', 'como', 'estas', 'yo', 'estoy', 'bien']
var element = 'como'
var fromIndex = -5

var result = includes(array, element, fromIndex)

console.assert(result === 'true')





