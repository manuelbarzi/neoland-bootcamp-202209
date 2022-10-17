
//caso palabra dentro del string, dando un start previo a la palabra
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, 'Pame', 3)

console.assert(res === 3) 

//caso palabra dentro del string, sin dar un start
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, 'Pame')

console.assert(res === 3) 


//caso palabra no encontrada dentro del string
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, 'Pamd', 3)

console.assert(res === -1) 

//caso palabra dentro del string, dando un start posterior a la palabra
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, 'Pame', 7)

console.assert(res === -1) 

//caso sin dar palabra ni valor
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, '')

console.assert(res === 0) 

//caso sin dar palabra y dando un valor menor a la longitud de la frase o palabra
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, '', 5)

console.assert(res === 5) 

//caso sin dar palabra y dando un valor mayor a la longitud de la frase o palabra
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, '', 30)

console.assert(res === 22) 

//caso dar palabra y valor negativo
var frase = 'la Pame esta cocinando'

var res = myIndexOf(frase, 'Pame', -100)

console.assert(res === 3) 