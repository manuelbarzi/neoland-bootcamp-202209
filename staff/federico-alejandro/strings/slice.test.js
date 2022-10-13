//devuelve 'la m' del string 'hola mundo', desde numA 2 y numB 6
var string = "hola mundo";
var result = slice(string, 2, 6);

console.assert(result === "la m");

var string = "hola mundo";
var result = slice(string, 0, 1);

console.assert(result === "h");

// devuelve 'hola m' del string 'hola mundo, desde numA 0 y numB -4
var string = "hola mundo";
var result2 = slice(string, 0, -4);

console.assert(result2 === "hola m")
 
// devuelve 'hola m' del string 'hola mundo', desde numA -3
var string = "hola mundo";
var result3 = slice(string, -3);

console.assert(result3 === "ndo")

var string = "hola mundo";
var result3 = slice(string, 5, 100);

var string = "hola mundo";
var result3 = slice(string, -2, -4);


