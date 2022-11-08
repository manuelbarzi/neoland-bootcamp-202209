// CASE returns 'hola' for string 'hola mundo' and start index 0 and end index 4

var texto = 'hola mundo'

var res = substring(texto, 0, 4)

console.assert(res === 'hola')

// CASE returns 'mundo' for string 'hola mundo' with start index 5 and none index End.

var texto = 'hola mundo'

var res = substring(texto, 5)

console.assert(res === 'mundo')

// CASE returns 'mundo' for string with start index 5 and end index 100 (more than string lenght)

var texto = 'hola mundo'

var res = substring(texto, 5, 100)

console.assert(res === 'mundo')

// CASE returns 'mundo' for string with start index -5 and end index 4

var texto = 'hola mundo'

var res = substring(texto, -5, 4)

console.assert(res === 'hola')

// CASE returns '' for string 'hola mundo' and start index 0 and end index 0

var texto = 'hola mundo'

var res = substring(texto, 0,0)

console.assert(res === '')

// CASE returns 'ola' for string 'hola mundo' and start index 4 and end index 1

var texto = 'hola mundo'

var res = substring(texto, 4 , 1)

console.assert(res === 'ola')