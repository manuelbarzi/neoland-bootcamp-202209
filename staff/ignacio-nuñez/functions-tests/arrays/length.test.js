// CASE succes, array of 5 strings, return 5
var names = ['pedro', 'juan', 'maria','sofia','marcelo']

var result = length(names)

console.assert(result === 5)

//CASE array of 0 elements, return 0
var names = []

var result = length(names)

console.assert(result === 0)

// CASE succes, array of 5 strings and 1 undefined,  return 6
var names = ['pedro', 'juan', 'maria',undefined,'sofia','marcelo']

var result = length(names)

console.assert(result === 6)