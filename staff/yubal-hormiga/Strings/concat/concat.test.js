// Nos devuelve 'holamundo' por haber concatenado text1 y text2

var text1 = 'hola'
var text2 = 'mundo'
var res = myConcat(text1, text2)

console.assert(res === 'holamundo')

//nos devuelve 'hola10' por haber Concatenado text5 y text6 

var text5 = 'hola'
var text6 = '10'
var res2 = myConcat(text5, text6)

console.assert(res2 === 'hola10')

//  nos devuelve 'hola mundo' por Concatenar text1, ' ' , text2

var res3 = myConcat(text1, " ", text2)

console.assert(res3 === 'hola mundo')

// devuelve 'hola mundo' por haber contatenado todos los strings dentro del array
var res4 = myConcat("h", "o", "l", "a", " ", "m", "u", "n", "d", "o")

console.assert(res4 === "hola mundo")

// nos devuelve 81 por haber Concatenado numA y nunB. No los suma
 
var numA = 8
var numB = 1
var res5 = myConcat(8, 1)

console.assert(res5 === '81')

myConcat({})





