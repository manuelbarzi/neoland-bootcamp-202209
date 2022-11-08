// Sintaxis: indexOf(searchString, position)

// CASE 1: found the index of the first world of 'clavito' that we are looking for inside the

var string = 'Pablito clavó un clavito, ¿qué clavito clavó Pablito?'
var searchString = 'clavito'

var result = indexOf(string, searchString)

console.assert(result === 17)

// CASE 2: if we don't found the searchString the result is -1

var string = 'Blue Whale'
var searchString = 'Blute'

var result = indexOf(string, searchString)

console.assert(result === -1)

// CASE 3: if we don't found the searchString the result is -1

var string = 'Blue Whale'
var searchString = 'Whale'
var position = 5

var result = indexOf(string, searchString, position)

console.assert(result === 5)

// CASE 4: if we don't found the searchString the result is -1
'Blue Whale'.indexOf('', 9)       // returns  9

var string = 'Blue Whale'
var searchString = ''
var position = 9

var result = indexOf(string, searchString, position)

console.assert(result === 9)