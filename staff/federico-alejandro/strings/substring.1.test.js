var s = 'hola mundo'
var res = substring(s, 3, 7)

console.assert(res === 'a mu')

var s = 'hola mundo'
var res = substring(s, 4)

console.assert(res === ' mundo')

var s = 'hola mundo'
var res = substring(s, 5, 2 )

console.assert(res === 'la')

var s = 'hola mundo'
var res = substring(s, -3, 6)

console.assert(res === 'hola m')
