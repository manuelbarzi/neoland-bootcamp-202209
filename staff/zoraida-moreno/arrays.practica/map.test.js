// map: devuelve otro array compuesto por los valores de retorno
// por cada una de las funciones ejecutadas.
// recibe el primer parametro, el array y el segundo parametro es la callback(funcion)
//
var array1 = [1, 4, 9, 16];

var arrayMapeado = map(array1, function (number) {
    return number * 2
});

console.assert(arrayMapeado.length === 4)
console.assert(arrayMapeado[0] === 2)
console.assert(arrayMapeado[1] === 8)
console.assert(arrayMapeado[2] === 18)
console.assert(arrayMapeado[3] === 32)
console.assert(array[0] === 1)
console.assert(array[1] === 4)
console.assert(array[2] === 9)
console.assert(array[3] === 16)