var paises = ['Brasil', 'Italia', 'Holanda', 'Arg', 'Japon']
//declaro una variable y le asigno el valor de la longitud del array
var paisesLength = paises.length 

var result = pop(paises)

console.assert(result === 'Japon')
console.assert(paises.length === paisesLength-1)
// primer console.asssert have referencia al pop, en el segundo comparo la longitud del array con la variable paisesLenth a la cual le resto uno
//y asi la longitud del array pasa a tener una posicion menos.