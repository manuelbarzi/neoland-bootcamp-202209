// CASE returns '' for string 'hola mundo' index 0 

var s = 'hola mundo'

var res = repeat(s, 0)

console.assert("")

// CASE returns 'error' for string 'hola mundo' index -1

var s = 'hola mundo'

var res = repeat(s, -1)

console.assert("error")

// CASE returns 'hola mundohola mundo' for string 'hola mundo' index 2 

var s = 'hola mundo'

var res = repeat(s, 2)

console.assert('hola mundohola mundo')

// CASE returns ''hola mundohola mundohola mundo'' for string 'hola mundo' index 2

var s = 'hola mundo'

var res = repeat(s, 3)

console.assert('hola mundohola mundohola mundo')

// CASE returns ''hola mundohola mundohola mundohola mundohola mundo'' for string 'hola mundo' and index 10
var s = 'hola mundo'

var res = repeat(s, 5)

console.assert('hola mundohola mundohola mundohola mundohola mundo')
