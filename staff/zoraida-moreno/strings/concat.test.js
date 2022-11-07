// The concat() method concatenates the string arguments 
// to the calling string and returns a new string.

//CASE: we select 2 string ('Hello' and 'World') to be concatenate as 'HelloWorld'
 var string1 = 'Hello';
 var string2 = 'World';

 var result1 = concat(string1, string2)
 console.assert ( result1 === 'HelloWorld')

 //CASE: we select 3 strings ('Hello', 'World' and 'Zoraida') to be concatenate with a space as 'Hello World Zoraida'

 var string1 = 'Hello';
 var string2 = 'World';
 var string3 = 'Zoraida';

 var result1 = concat(string1, ' ', string2, ' ', string3)
 console.assert(result1 === '-Hello World Zoraida')

 //CASE: we select 2 string ('Hello' and 'Zoraida') to be concatenate with a space as 'Hello World Zoraida'

 var string1 = 'Hello';
 var string2 = 'World';
 var string3 = 'Zoraida';

 var result = concat(string1, ' ', string3)
 console.assert(result1 === 'Hello Zoraida')


// //case nos devuelve 'holamundo'por concatenar a y b. 
// var a = 'Hola';
// var b = 'mundo';

// var res = concat(a, b)

// console.assert(res === 'Holamundo');

// // nos devuelve 'comprar pan' por concatenar d y e

// var d = 'comprar';
// var e = 'pan'

// var res2 = concat(d, e)

// console.assert(res2 === 'comprarpan')

// // nos devuelve 'hola mundo' tomando el espacio como string

// var res3 = myConcat(a, ' ', b)

// console.assert(res3 === 'Hola mundo')

// // usando argument.lenght evalua el largo del array

// var res4 = myConcat('h', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o')

// console.assert(res4 === 'hola mundo')

// // que pasa si los argumentos son números

// var f = 4
// var g = 5

// var res5 = myConcat(4, 5)

// console.assert(res5 === '45')


