// CASE 1 returns "undo" for the string "hola mundo" from index 6

var string = "hola mundo"

var result = slice(string, 6)

console.assert(result === "undo")

// CASE 2 returns "la mu" for the string "hola mundo" from indexStart 2 to indexEnd 7

var string = "hola mundo"

var result = slice(string, 2, 7)

console.assert(result === "la mu")

// CASE 3 returns "undo" for the string "hola mundo" when indexStart is negative

var string = "hola mundo"

var result = slice(string, -4)

console.assert(result === "undo")

// CASE 4 returns "a mun" for the string "hola mundo" when indexStart < indexEnd and are negative

var string = "hola mundo"

var result = slice(string, -7, -2)

console.assert(result === "a mun")

// CASE 5 returns "" for the string "hola mundo" when indexStart and indexEnd have same value

var string = "hola mundo"

var result = slice(string, 2, 2)

console.assert(result === "")