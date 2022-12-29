// Devuelve 'holahola' del string 'hola' por haberlo repetido 2 veces
var string = 'hola'
var count = 2

var res = repeat(string, count)

console.assert(res === 'holahola')

// nos devuelve '' del string 'hola' por haber repetido 0 veces
var string = 'hola'
var count = -2

var res= repeat(string, -2)
//El resultado sera un mensaje de error ya que ingresar un numero negativo es invalido
console.assert(res instanceof RangeError)
console.assert(res.message === 'invalid count value: -2' )

// En este caso devuelve 'hola' repetido 3 veces. toma el valor del enero y no el decimal.
var string = 'hola'
var count = 3.4

var res = repeat(string, count)

console.assert(res === 'holaholahola')
// En caso de ser una fraccion 1/0, el valor 0 es tomado como infinito y seria invalido
var string = 'string'
var count = 1/0 //infinity 

var res = repeat(string, count)

console.assert(res instanceof RangeError)
console.assert(res.message === 'invalid count value: Infinity')


