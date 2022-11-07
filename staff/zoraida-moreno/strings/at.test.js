// El método At() de String devuelve en un nuevo String el carácter UTF-16 de una cadena.
 //acepta enteros positivos y negativos(cuando es neg cuenta de derecha a izquierda empezando por el ultimo indice)
 //cuando el indice esta fuera de rango devuelve undefined.

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
