// sintaxis at(index)

// CASE: when the index I want is 3 the function return 'i'.
var string = "Ornitorringo"
var index = 3

var result = at(string, index)
console.assert(result === 'i')

// CASE: when the index I want is -3 the function return 'n'.

var string = "Camaleón"
var index = -3

var result = at(string, index)
console.assert(result === 'e')

// CASE: when we don't indicate the number of the index on the function, it return index '0' by default.

var string = "Panda"
// var index = 0  

var result = at(string)
console.assert(result === 'P')

// CASE: when we indicate a number instaed of a string, the function returns sttring an error.

var string = 123
var index = 2  

try {
    var resultSpecial = at(string)
} catch(error) {
    console.assert(error instanceof TypeError)
    console.assert(error.message === string + ' is not a string')
}

// CASE: when we indicate a string instaed of a index number, the function returns index '0'.

var string = "Wendy"
var index = 't'  

result4 = at(string, index)

console.assert(result4 === 'W')


