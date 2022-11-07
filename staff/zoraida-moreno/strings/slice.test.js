//The slice() method extracts a section of a string and returns it 
//as a new string, without modifying the original string.
// If indexStart >= str.length, an empty string is returned.
// If indexStart < 0, the index is counted from the end of the string. More formally, in this case, the substring starts at max(indexStart + str.length, 0).
// If indexStart is omitted, undefined, or cannot be converted to a number (using Number(indexStart)), it's treated as 0.
// If indexEnd is omitted, undefined, or cannot be converted to a number (using Number(indexEnd)), or if indexEnd >= str.length, slice() extracts to the end of the string.
// If indexEnd < 0, the index is counted from the end of the string. More formally, in this case, the substring ends at max(indexEnd + str.length, 0).
// If indexEnd <= indexStart after normalizing negative values (i.e. indexEnd represents a character that's before indexStart), an empty string is returned.


// CASE 1 returns 'hola mundo' for string 'hola mundo' when no indexes.

var s = 'hola mundo'

var res = slice()

console.assert('hola mundo')

// CASE 2 returns 'n' for string 'hola mundo' at index 7

var s = 'hola mundo'

var res = slice(s, 7)

console.assert(res === 'ndo')


// CASE 3 returns 'la mun' for string 'hola mundo' at indexStar = 2 idexEnd = 8

 var s = 'hola mundo'

 var res = slice(s, 2, 8)

 console.assert(res === 'la mun')


// CASE 3 returns 'ndo' for string 'hola mundo' at index -3

var s = 'hola mundo'

var res = slice(s, -3)

console.assert(res === 'ndo')

// CASE 4 returns 'a mun' for string 'hola mundo' when indexStart < indexEnd and are negative.

var s = 'hola mundo'

var res = slice(s, -7, -2)

console.assert(res === 'a mun')

// CASE 5 returns "" for the string "hola mundo" when indexStart and indexEnd have same value

var string = "hola mundo"

var result = slice(string, 2, 2)

console.assert(result === "")



