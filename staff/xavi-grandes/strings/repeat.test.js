// CASE: the text MVP repeat 2 times 

var text = 'MVP'
var count = 2

var res = repeat(text, count)

console.assert(res === 'MVPMVP')

// CASE: the count is negative -2

var text = 'ABC'
var count = -2

var res = repeat(text, count)

console.assert(res instanceof RangeError)
console.assert(res.message === 'Invalid count value: -2')

// CASE: the count is a fraction

var text = 'PEPE'
var count = 1/3

var res = repeat(text, count)

console.assert(res === '')

// CASE: succeeds returning 3 times 'NEXT' when count is a decimal number 3.2

var text = 'NEXT'
var count = 3.2

var res = repeat(text, count)

console.assert(res === 'NEXTNEXTNEXT')

// CASE: fails on infinite count with RangeError

var text = 'NEXT'
var count = Infinity // 1/0

var res = repeat(text, count)

console.assert(res instanceof RangeError)
console.assert(res.message === 'Invalid count value: Infinity')