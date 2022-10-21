// CASE a string with positives numbers
{
var string = 'Hola mundo loco'
var start = 0
var end = 4

var result = slice(string, start, end)

console.assert(result === 'Hola')
}

// CASE a string with positives numbers

{
var string = 'Hola mundo loco'
var start = 5
var end = 10

var result = slice(string, start, end)

console.assert(result === 'mundo')
}

// CASE wit only one index

{
var string = 'Hola mundo loco'
var start = 5
var end 

var result = slice(string, start, end)

console.assert(result === 'mundo loco')
}