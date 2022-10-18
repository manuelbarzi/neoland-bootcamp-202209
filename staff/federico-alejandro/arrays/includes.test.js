// ecuantra un valor existente 
var numeros = [10, 11, 3, 20, 5]

var result = includes(numeros, 3 )

console.assert( result === true)

//encuentra un valor existente
var numeros = [10, 15, 150, 23, 4]

var res = includes(numeros, 15, -4 )

console.assert(res === true)


// encuentra un valor existente dando una posicion de inicio negativa
var planetas = ['Marte', 'Tierra', 'Urano', 'Jupiter']

var result = includes(planetas, 'Tierra', -20)

console.assert(result === true)

// falla,encuentra  valor existente dando una posicion inicial

var planetas = ['Marte', 'Tierra', 'Urano', 'Jupiter']

var result = includes(planetas, 'Tierra', 2)

console.assert(result === false)

//falla, dando solo el array, sin posiciones

var planetas = ['Marte', 'Tierra', 'Urano', 'Jupiter']

var result = includes(planetas)

console.assert(result === false)

// no se ingresa array

var planetas = ['Marte', 'Tierra', 'Urano', 'Jupiter']
var planeta = 'Marte'
var _error
try {
    includes(planeta)
} catch (error) {
    _error = error
}

console.assert(_error instanceof TypeError)
console.assert(_error.message === 'Marte is not an array')