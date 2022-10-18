// Sintaxis: indexOf(searchString, position)

// CASE: found the index of the first world of 'clavito' that we are looking for inside the

var string = 'Pablito clavó un clavito, ¿qué clavito clavó Pablito?'
var searchString = 'clavito'

var result = indexOf(string, searchString)

console.assert(result === 17)