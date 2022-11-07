// CASE repet three times the string

var string = 'ABC-'
var n = 3

var res = repeat(string, n)

console.assert(res === 'ABC-ABC-ABC-')


// CASE the index is negative and invalid

var string = 'ABC'
var n = -1

var res = repeat(string, n)

console.assert(res === 'Invalid count value: -1')


// CASE with index repeat 0

var string = 'ABC'
var n = ''

var res = repeat(string, n)

console.assert(res === '')


// CASE index with a number with decimals

var string = 'ABC '
var n = 4.7

var res = repeat(string, n)

console.assert(res === 'ABC ABC ABC ABC ')

