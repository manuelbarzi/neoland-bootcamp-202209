// caso start menor a end y ambos positivos

var parrafo= 'hola mundo'

var res = sliceParrafo(parrafo, 5, 8)

console.assert(res === 'mun')

// caso end mayor a start y ambos positivos

var parrafo= 'hola mundo'

var res = sliceParrafo(parrafo, 5, 100)

console.assert(res === 'mundo')

// caso end undefined

var parrafo= 'hola mundo'

var res = sliceParrafo(parrafo, 5)

console.assert(res === 'mundo')

// caso start negativo y end menor o igual que start

var parrafo= 'hola mundo'

var res = sliceParrafo(parrafo, -4, -8)

console.assert(res === '')

// caso start negativo y end undefined

var parrafo= 'hola mundo'

var res = sliceParrafo(parrafo, -4)

console.assert(res === 'undo')

// caso start negativo y end mayor que start

var parrafo= 'hola mundo'

var res = sliceParrafo(parrafo, -4, -2)

console.assert(res === 'un')

// caso start igual a 0 o positivo y end negativo

var parrafo= 'hola mundo'

var res = sliceParrafo(parrafo, 0, -1)

console.assert(res === 'hola mund')

// caso start negativo con un valor absoluto mayor a la longitud del parrafo

var parrafo= 'hola mundo'

var res = sliceParrafo(parrafo, -100, 20)

console.assert(res === 'hola mundo')