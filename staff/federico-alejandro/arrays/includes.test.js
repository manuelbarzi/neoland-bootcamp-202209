// ecuantra un valor existente 
var numeros = [10, 11, 3, 20, 5]

var result = includes(numeros, 3 )

console.assert( result === true)

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