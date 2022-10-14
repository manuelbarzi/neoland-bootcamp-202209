//1er caso, 

var string = 'hola mundo'

var result = substring(string, 3 , 7)

console.assert(result ==='a mu')

// 2o caso, dandole un valor, que lea desde el valor, hasta el final.

var string = 'hola mundo'

var result = substring(string, 4)

console.assert(result === ' mundo')

//3er caso, si el segundo valor es menor al del primero, que el valor mayor sea siempre el endIndex y el menos el startIndex. 

var string = 'hola mundo'

var result = substring(8, 2)

console.assert(result === 'la mund')

//4º caso, si el valor que nos da es menor al startIndex coger el primer valor de este, o si es mayor que el propio string se quede en el endIndex.

var string = 'hola mundo'

var result = substring(-4, 15)

console.assert(result === 'hola mundo')