// El elemento 'to' comienza comienza en la posicion 21
var string = 'Hello world, welcome to the universe'
var searchString = 'to'

var res = indexOf(string, searchString)

console.assert(res === 21)

// Retorna 13 porque el elemento comienza en esa posicion
var string = 'Hello world, welcome to the universe'
var searchString = 'welcome'
var result = indexOf(string, searchString )

console.assert(result === 13)

// Retorna -1 porque no encuentra el valor
var string = 'Hello world, welcome to the universe'
var searchString = 'Universe'
var result = indexOf(string, searchString )

console.assert(result === -1)

var s = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
var searchString = 'dog'

var res = indexOf(s, searchString)

console.assert(res === 40)
