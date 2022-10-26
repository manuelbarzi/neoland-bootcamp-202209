// CASE 1 returns "holamundo" for the string1 and string2 being concatenated

var string1 = "hola"
var string2 = "mundo"

var result = concat(string1, string2)

console.assert(result === "holamundo")

// CASE 2 returns "hola mundo" for the string1 and string2 being concatenated with " " between

var string1 = "hola"
var string2 = "mundo"

var result = concat(string1, " ", string2)

console.assert(result === "hola mundo")


// CASE 2.1 returns "hola mundo 203" for the string1 and numbers inside the array, and being concatenated with " " between

var string3 = "hola mundo"
var string4 = 203

var result = concat(string3, " ", string4)

console.assert(result === "hola mundo 203")

// CASE 2.2 returns "telf 659 666666" for all strings and numbers inside the array and being concatenated

var result = concat("telf.", " ", "659", "-", "66", "66", 66)

console.assert(result === "telf. 659-666666")