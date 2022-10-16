// CASE returns 'h' for 'hola mundo'

var s = 'hola mundo'

var result = at(s, 0)

console.assert(result === 'h')

//CASE returns 'h' for string 'hola mundo' with no index given

var s = 'hola mundo'

var res = at(s)

console.assert(res === 'h')

// CASE returns undefined for string 'hola mundo' for index 30

var s = 'hola mundo'

var res = at(s, 30)

console.assert(res === undefined)