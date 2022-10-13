// CASE returns 'o' for string 'hola mundo' at index 1
var text = 'hola mundo'

var res = at(s, 1)

console.assert(res === 'o')

//CASE returns undefined for strig 'hola mundo' at index -70
var text = 'hola mundo'
var res = at(text, -70)

console.assert(res === undefined)
//CASE retuns 'n' for string 'hola mundo' at index -3
var text = 'hola mundo'
var res = at(text, -3)

console.assert(res === 'n')
