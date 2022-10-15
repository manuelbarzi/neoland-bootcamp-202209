//  CASE succes search existent element on the array, without giving a start position

var animals = ['tiger', 'lion', 'cat','dog', 'duck', 'fox', 'cat']

var resultado = indexOf(animals, 'dog')

console.assert(resultado === 3)

//  CASE succes search existent element on the array, giving a start position

var animals = ['tiger', 'lion', 'cat','dog', 'duck', 'fox', 'cat']

var resultado = indexOf(animals, 'cat', 4)

console.assert(resultado === 6)

//  CASE succes search existent element on the array, giving a negative start position

var animals = ['tiger', 'lion', 'cat','dog', 'duck', 'fox', 'cat']

var resultado = indexOf(animals, 'dog', -6)

console.assert(resultado === 3)

//  CASE fail search inexistent element on the array, giving a start position

var animals = ['tiger', 'lion', 'cat','dog', 'duck', 'fox', 'cat']

var resultado = indexOf(animals, 'cow', 2)

console.assert(resultado === -1)

//  CASE fail search existent element on the array, giving a start position bigger than length

var animals = ['tiger', 'lion', 'cat','dog', 'duck', 'fox', 'cat']

var resultado = indexOf(animals, 'cat', 100)

console.assert(resultado === -1)

//  CASE fail search existent element on the array, giving a start negative position with absolute value bigger than length

var animals = ['tiger', 'lion', 'cat','dog', 'duck', 'fox', 'cat']

var resultado = indexOf(animals, 'tiger', -100)

console.assert(resultado === 0)

//  CASE fail search put infinite number

var animals = ['tiger', 'lion', 'cat','dog', 'duck', 'fox', 'cat']

var resultado = indexOf(animals, 'tiger', 1/0)

console.assert(resultado === -1)


//  CASE fail search put 0/1

var animals = ['tiger', 'lion', 'cat','dog', 'duck', 'fox', 'cat']

var resultado = indexOf(animals, 'duck', 0/1)

console.assert(resultado === 4)




// encontrar todos los elementos de un array
// var indices = []

// var animals = ['tiger', 'lion', 'cat','dog', 'duck', 'fox', 'cat']

// var allElements = indexOf(animals, 'cat')

// while (allElements !== -1){
//     indices.push(allElements)
//         allElements = indexOf(animals,'cat',(allElements+1))
// }

// indices = [2,6]