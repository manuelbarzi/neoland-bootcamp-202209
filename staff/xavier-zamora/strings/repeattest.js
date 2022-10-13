// CASE returns '' for string 'hola mundo' index 0 
debugger
var s = 'hola mundo'

var res = repeat(s, 0)

console.assert(res === "")

// CASE returns 'error' for string 'hola mundo' index -1

var s = 'hola mundo'

var res = repeat(res === s, -1)

console.assert(res === "error")

// CASE returns 'hola mundohola mundo' for string 'hola mundo' index 2 

var s = 'hola mundo'

var res = repeat(s, 2)

console.assert(res === 'hola mundohola mundo')

// CASE returns ''hola mundohola mundohola mundo'' for string 'hola mundo' index 2

var s = 'hola mundo'

var res = repeat(s, 3)

console.assert(res === 'hola mundohola mundohola mundo')

// CASE returns ''hola mundohola mundohola mundohola mundohola mundo'' for string 'hola mundo' and index 5
var s = 'hola mundo'

var res = repeat(res === s, 5)

console.assert(res === 'hola mundohola mundohola mundohola mundohola mundo')
