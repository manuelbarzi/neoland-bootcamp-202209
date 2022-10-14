// ! String.concat(value)

//* CASE returns 'hola mundo ' for concat 'hola' and  'mundo'
var s1 = 'hola ' 
var s2 = 'mundo'
var res = concat(s1,s2)
//*/* CASE returns '45' for concat '4' and  '5'
var s1 = '4' 
var s2 = '5'
var res = concat(s1,s2)

console.assert(res === '45')

//*CASE RETURNS  ' '

var s1 = '' 
var s2 = ''
var res = concat(s1,s2)

console.assert(res === '')



