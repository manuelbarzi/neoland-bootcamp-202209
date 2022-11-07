//! (string).slice(ini,end)

// CASE returns 'hola' for string 'hola mundo' and start index 0 and end index 4

var s = 'hola mundo'

var res = slice(s, 0, 4)

console.assert(res === 'hola')

// CASE returns 'mundo' for string 'hola mundo' and start index 5

var s = 'hola mundo'

var res = slice(s, 5)

console.assert(res === 'mundo')

// CASE returns 'mundo' for string 'hola mundo' and start index 5 and end index 100

var s = 'hola mundo'

var res = slice(s, 5, 100)

console.assert(res === 'mundo')

// CASE returns 'ola' for string 'hola mundo' and start index 4 and end index 1

var s = 'hola mundo'

var res = slice(s, 4, 1)

console.assert(res === 'ola')

// CASE returns 'hola' for string 'hola mundo' and start index 4 and end index -10

var s = 'hola mundo'

var res = slice(s, 4, -10)

console.assert(res === 'hola')

// CASE returns '' for string 'hola mundo' and start index 0 and end index 0 (Yubal)

var s = 'hola mundo'

var res = slice(s, 0, 0)

console.assert(res === '')