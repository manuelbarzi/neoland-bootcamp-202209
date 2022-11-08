//CASE palabra dentro de un string, dandoun start previo a la palabra
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, 'Pame', 3)

console.assert(res === 3)

//CASE  palabra dentro de un string sin dar un start
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, 'Pame')

console.assert(res === 3)

//CASE palabra no encontrada dentro de un string
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, 'Pamd', 3)

console.assert(res === -1)

//CASE palabra dentr de un string, dando un start posterior a la palabra
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, 'Pame', 7)

console.assert(res === -1)

//CASE sin dar ni palabra ni valor
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, '')

console.assert(res === 0)

//CASE sin dar palabra y dando un valor menor a la longitud de la frase o la palabra
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, '', 5)

console.assert(res ===5)
