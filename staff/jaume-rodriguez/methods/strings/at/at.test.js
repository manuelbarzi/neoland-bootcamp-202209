// CASE 1 returns "m" for the string "hola mundo" where index = 5

var string = 'hola mundo'

var result = at(string, 5)

console.assert(result === 'm')

// CASE 2 returns "d" for the string "hola mundo" where index = -5

var string = 'hola mundo'

var result = at(string, -2)

console.assert(result === 'd')


// CASE 3 returns "h" for the string "hola mundo" where index = undefined

var string = 'hola mundo'

var result = at(string)

console.assert(result === 'h')