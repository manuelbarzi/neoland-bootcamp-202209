const array1 = [1, 4, 9, 16];

const arrayMappeado = map(array1, function (number) {
  return number * 2 ;
});

console.assert(arrayMappeado.length === 4);
console.assert(arrayMappeado[0] === 2);
console.assert(arrayMappeado[1] === 8);
console.assert(arrayMappeado[2] === 18);
console.assert(arrayMappeado[3] === 32);
console.assert(array1[0] === 1);
console.assert(array1[1] === 4);
console.assert(array1[2] === 9);
console.assert(array1[3] === 16);

// funcion sumando

const array2 = [10, 20, 30, 40];

const arraySuma = map(array2, function (number) {
    return number + 10
});

console.assert(arraySuma.length === 4);
console.assert(arraySuma[0] === 20);
console.assert(arraySuma[1] === 30);
console.assert(arraySuma[2] === 40);
console.assert(arraySuma[3] === 50);
console.assert(array2[0] === 10);
console.assert(array2[1] === 20);
console.assert(array2[2] === 30);
console.assert(array2[3] === 40);

//Aplicamos raiz cuadrada
const array3 = [9, 25, 100, 64, 2500];

const arrayRaizCuadrada = map(array3, function (number) {
    return Math.sqrt(number)
});

console.assert(arrayRaizCuadrada.length === 5);
console.assert(arrayRaizCuadrada[0] === 3);
console.assert(arrayRaizCuadrada[1] === 5);
console.assert(arrayRaizCuadrada[2] === 10);
console.assert(arrayRaizCuadrada[3] === 8);
console.assert(arrayRaizCuadrada[4] === 50);
console.assert(array3[0] === 9);
console.assert(array3[1] === 25);
console.assert(array3[2] === 100);
console.assert(array3[3] === 64);
console.assert(array3[4] === 2500);

//CASE maps names to upper case ones
var names = ['john', 'katty', 'andy', 'robert', 'mary']

var namesInUpperCase
var toUpperCase = function (text) { return text.toUpperCase ()}

namesInUpperCase = map(names, toUpperCase)

console.assert(namesInUpperCase.length === 5)
console.assert(namesInUpperCase[0] === 'JOHN')
console.assert(namesInUpperCase[1] === 'KATTY')
console.assert(namesInUpperCase[2] === 'ANDY')
console.assert(namesInUpperCase[3] === 'ROBERT')
console.assert(namesInUpperCase[4] === 'MARY')

console.assert(names.length === 5)
console.assert(names[0] === 'john')
console.assert(names[1] === 'katty')
console.assert(names[2] === 'andy')
console.assert(names[3] === 'robert')
console.assert(names[4] === 'mary')

// No se ingresa el array

var nums = [10, 20, 30, 40]
var fun = function(num) { console.log(num)}

var _error

try{
  map(fun)
} catch (error) {
  _error = error 
}

console.assert(_error instanceof TypeError)
console.assert(_error.message === 'function(num) { console.log(num)} is not an array' )

// No se ingresa callback

var nums = [10, 20, 30, 40]
var fun = function(num) { console.log(num)}

var _error

try{
  map(nums)
} catch (error) {
  _error = error
}

console.assert(_error instanceof TypeError)
console.assert(_error.message === 'undefined is not a function')