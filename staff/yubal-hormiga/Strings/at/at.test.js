// CASE returns 'h' for string 'hola mundo' at index 0

var s = 'hola mundo'

var res = at(s, 0)

console.assert(res === 'h')

// CASE returns 'n' for string 'hola mundo' at index 7

var s = 'hola mundo'

var res = at(s, 7)

console.assert(res === 'n')

// CASE returns undefined for string 'hola mundo' at index -70

var s = 'hola mundo'

var res = at(s, -70)

console.assert(res === undefined)

// CASE returns 'n' for string 'hola mundo' at index -3

var s = 'hola mundo'

var res = at(s, -3)

console.assert(res === 'n')

// CASE returns 'h' for string 'hola mundo' with no index given

var s = 'hola mundo'

var res = at(s)

console.assert(res === 'h')