//CASE succes Retorna el primer numero mayor a 18
var ages = [3, 10, 18, 19, 20];

var checkAge = find(ages, function (age) {
  return age > 18
});

console.assert(checkAge === 19)

// CASE fail no encuentra el elemento que cumpla la condicion

var ages = [3, 10, 18, 19, 20];

var checkAge = find(ages, function (age) {
  return age > 23
});

console.assert(checkAge === undefined)


//CASE SUCCES Retorna el primer objeto con el nombre bananas y cantidad 0
var inventario = [
    {nombre: 'manzanas', cantidad: 2},
    {nombre: 'bananas', cantidad: 0},
    {nombre: 'cerezas', cantidad: 5}
];

var esBanana = find(inventario, function (element) {
    return element.nombre === 'bananas'

});

console.assert(inventario[1].nombre === 'bananas')
console.assert(inventario[1].cantidad === 0)