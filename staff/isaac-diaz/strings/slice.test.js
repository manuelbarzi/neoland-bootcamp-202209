//CASE start less than end and positives
var parrafo = 'hola mundo'

var res = sliceParrafo(parrafo, 5, 8)

console.assert(res === 'mun')

//CASE end more than start and positives

var parrafo = 'hola mundo'

var res = sliceParrafo(parrafo, 5, 100)

console.assert(res === 'mundo')

//CASE end is undefined
var parrafo = 'hola mundo'

var res = sliceParrafo(parrafo, 5)

console.assert(res === 'mundo')

//CASE start negative and end undefined
var parrafo = 'hola mundo'

var res = sliceParrafo(parrafo, -4)  // leng = 10, i = 6, indexStart = -4       10 -4 6

console.assert(res === 'undo')

// CASE start negative and end less than or same start
var parrafo = 'hola mundo'

var res = sliceParrafo(parrafo, -4, -8)

console.assert(res === '')


//CASE start negaive and end more than start
var parrafo = 'hola mundo'

var res = sliceParrafo(parrafo,-4, -2)

console.assert(res === 'un')

//CASE start same 0 or positive and end negative

var parrafo = 'hola mundo'

var res = sliceParrafo(parrafo, 0, -1)

console.assert(res === 'hola mund')

//CASE start negative with most absolute value to the leng with pharagrap
var parrafo = 'hola mundo'

var res = sliceParrafo(parrafo, -100, 20)

console.assert(res === 'hola mundo')

