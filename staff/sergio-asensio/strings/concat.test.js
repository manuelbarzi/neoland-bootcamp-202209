// CASE only with strings

var thing1 = 'hola'
var thing2 = 'mundo'
var thing3 = 'test'

var resultado = concat(thing1,thing2,thing3)

console.assert(thing1 === 'hola')
console.assert(thing2 === 'mundo')
console.assert(thing3 === 'test')

console.assert(resultado === 'holamundotest')



// CASE with strings and other things

var thing1 = 'hola'
var thing2 = ' / '
var thing3 = 'mundo'

var resultado = concat(thing1,thing2,thing3)

console.assert(thing1 === 'hola')
console.assert(thing2 === ' / ')
console.assert(thing3 === 'mundo')

console.assert(resultado === 'hola / mundo')


//CASE whit a string first and numbers after string

var thing1 = 'hola'
var thing2 = ' mundo '
var thing3 = '2022'

var resultado = concat(thing1,thing2,thing3)

console.assert(thing1 === 'hola')
console.assert(thing2 === ' mundo ')
console.assert(thing3 === '2022')

console.assert(resultado === 'hola mundo 2022')


//CASE whit a number first is not a function

var thing1 = 55
var thing2 = ' mundo '
var thing3 = '2022'

var resultado = concat(thing1,thing2,thing3)

console.assert(thing1 === 55)
console.assert(thing2 === ' mundo ')
console.assert(thing3 === '2022')

console.assert(resultado === 'thing1 concat is not a function')

