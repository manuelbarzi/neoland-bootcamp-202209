// CASE with the element at the array and without indexFrom

var array = ['casa', 'camion','arbol', 'pera']
var element = 'pera'

var result = indexOf(array, element)

console.assert(result === 3)



// CASE without the element and without indexFrom

var array = ['casa', 'camion','arbol', 'pera']
var element = 'pelota'

var result = indexOf(array, element)

console.assert(result === -1)



// CASE with the element at the array and indexFrom 

var array = ['casa', 'camion','arbol', 'pera']
var element = 'arbol'
var indexFrom = 1

var result = indexOf(array, element, indexFrom)

console.assert(result === 2)



// CASE with the element at the array and indexFrom wrong

var array = ['casa', 'camion','arbol', 'pera']
var element = 'camion'
var indexFrom = 2

var result = indexOf(array, element, indexFrom)

console.assert(result === -1)



// CASE with the element at the array and indexFrom bigger than the array.length

var array = ['casa', 'camion','arbol', 'pera']
var element = 'camion'
var indexFrom = 5

var result = indexOf(array, element, indexFrom)

console.assert(result === -1)



// CASE with the element at the array and a negative indexFrom

var array = ['casa', 'camion','arbol', 'pera']
var element = 'camion'
var indexFrom = -5

var result = indexOf(array, element, indexFrom)

console.assert(result === 1)


// CASE with the element at the array and a negative indexFrom 

var array = ['casa', 'camion','arbol', 'pera']
var element = 'camion'
var indexFrom = -2

var result = indexOf(array, element, indexFrom)

console.assert(result === -1)


// CASE with the same element two times at the array and a negative indexFrom

var array = ['casa', 'camion','arbol', 'pera', 'camion']
var element = 'camion'
var indexFrom = -2

var result = indexOf(array, element, indexFrom)

console.assert(result === 4)