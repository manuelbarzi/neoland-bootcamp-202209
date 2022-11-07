// CASE  with a '/' as separator between words at the arrays

var array = ['casa','mesa', 'tabla', 'piedra']
var separator = ('/')

var result = join(array, separator)

console.assert(result === 'casa/mesa/tabla/piedra')


// CASE  with a ' - ' as separator between words at the arrays

var array = ['casa','mesa', 'tabla', 'piedra']
var separator = (' - ')

var result = join(array, separator)

console.assert(result === 'casa - mesa - tabla - piedra')


// CASE  with '' as separator, 

var array = ['casa','mesa', 'tabla', 'piedra']
var separator = ''

var result = join(array, separator)

console.assert(result === 'casamesatablapiedra')



// CASE  without separator in the function, its separated with ' , '

var array = ['casa','mesa', 'tabla', 'piedra']
var separator

var result = join(array)

console.assert(result === 'casa,mesa,tabla,piedra')

