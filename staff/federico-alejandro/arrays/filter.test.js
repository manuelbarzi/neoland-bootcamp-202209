// devuelve un nuevo array con las palabras que cumplen la condicion
var words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']



var result = filter(words, function(word){
    return  word.length > 6;
}) 
console.assert(result.length === 3),
console.assert(result[0] === 'exuberant'),
console.assert(result[1] === 'destruction'),
console.assert(result[2] === 'present'),

console.assert(words.length === 6),
console.assert(words[0] === 'spray'),
console.assert(words[1] === 'limit'),
console.assert(words[2] === 'exuberant'),
console.assert(words[3] === 'destruction'),
console.assert(words[4] === 'elite'),
console.assert(words[5] === 'present')

// Retorna un nuevo array con las personas que cumplan con la condicion <= 3 
var personas = [ {nombre: 'Juan', edad: 50},
{nombre: 'Maria', edad: 2},
{nombre: 'Esteban', edad: 10},
{nombre: 'Carlos', edad: 3},
{nombre: 'Daniel', edad: 25},
{nombre: 'Clara', edad: 1}];

var pequeños = filter(personas, function(menores){
    return menores <= 3
})

console.assert(personas[1].nombre === 'Maria'),
console.assert(personas[1].edad === 2),
console.assert(personas[3].nombre === 'Carlos'),
console.assert(personas[3].edad === 3),
console.assert(personas[5].nombre === 'Clara'),
console.assert(personas[5].edad === 1)

//CASE fallo, entrada sin array

var dias = ['lunes', 'martes', 'miercoles' ]
var res = function(dia){ console.log(dia)}

var _error
try {
    filter(res)
} catch (error) {
    _error = error  
}

console.assert(_error instanceof TypeError)
console.assert(_error.message === 'function(dia){ console.log(dia)} is not an array')

//CASE fallo, no se ingresa callback
var dias = ['lunes', 'martes', 'miecoles']
var res = function(dia) {console.log(dia)}

var _error

try{
   filter(dias)
} catch (error) {
    _error = error
}

console.assert(_error instanceof TypeError)
console.assert(_error.message === 'undefined is not a function')