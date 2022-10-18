// CASE1: we have a string and we indicated just an indexStart 10 but we don't indicate any indexEnd (string.length by default)
var string = 'the fox jumps over the lazy dog.'
var indexStart = 23

var result = slice(string, indexStart)
console.assert(result === 'lazy dog.')

// CASE 2 returns "jumps over" for the string "the fox jumps over the lazy dog." from indexStart 8 to indexEnd 18
var string = 'the fox jumps over the lazy dog.'
var indexStart = 8
var indexEnd = 18

var result = slice(string, indexStart, indexEnd)
console.assert(result === 'jumps over')

// CASE 3 returns "undo" for the string "hola mundo" when indexStart is negative
var string = 'the fox jumps over the lazy dog.'
var indexStart = -4

var result = slice(string, indexStart)
console.assert(result === 'dog.')

// CASE 4 returns "a mun" for the string "hola mundo" when indexStart < indexEnd and are negative

var string = 'the fox jumps over the lazy dog.'

var result = slice(string, -9, -5)

console.assert(result === "lazy")

// CASE 5 returns "" for the string "the fox jumps over the lazy dog." when indexStart = indexEnd