// devuelve un nuevo array con las palabras que cumplen la condicion
const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']



const resultFilter = filter(words, function (word) {
    return word.length > 6;
})
console.assert(resultFilter.length === 3),
    console.assert(resultFilter[0] === 'exuberant'),
    console.assert(resultFilter[1] === 'destruction'),
    console.assert(resultFilter[2] === 'present'),

    console.assert(words.length === 6),
    console.assert(words[0] === 'spray'),
    console.assert(words[1] === 'limit'),
    console.assert(words[2] === 'exuberant'),
    console.assert(words[3] === 'destruction'),
    console.assert(words[4] === 'elite'),
    console.assert(words[5] === 'present')

// Retorna un nuevo array con las personas que cumplan con la condicion <= 3 
const personas = [
    { nombre: 'Juan', edad: 50 },
    { nombre: 'Maria', edad: 2 },
    { nombre: 'Esteban', edad: 10 },
    { nombre: 'Carlos', edad: 3 },
    { nombre: 'Daniel', edad: 25 },
    { nombre: 'Clara', edad: 1 }
];

const pequeños = filter(personas, function (persona) {
    return persona.edad <= 3
})

console.assert(pequeños.length === 3)
console.assert(pequeños[0].nombre === "Maria")
console.assert(pequeños[1].nombre === "Carlos")
console.assert(pequeños[2].nombre === "Clara")

console.assert(personas.length === 6)
console.assert(personas[1].nombre === 'Maria')
console.assert(personas[1].edad === 2)
console.assert(personas[3].nombre === 'Carlos')
console.assert(personas[3].edad === 3)
console.assert(personas[5].nombre === 'Clara')
console.assert(personas[5].edad === 1)

//CASE fallo, entrada sin array

const dias = ['lunes', 'martes', 'miercoles']
const printDay = function (dia) { console.log(dia) }

let _errorFilter

try {
    filter(printDay)
} catch (error) {
    _errorFilter = error
}

console.assert(_errorFilter instanceof TypeError)
console.assert(_errorFilter.message === (printDay + ' is not an array'))

//CASE fallo, no se ingresa callback
_errorFilter = null

try {
    filter(dias)

} catch (error) {
    _errorFilter = error
}

console.assert(_errorFilter instanceof TypeError)
console.assert(_errorFilter.message === 'undefined is not a function')