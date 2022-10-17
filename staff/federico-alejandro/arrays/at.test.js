// CASE returns '30' for arrays '10,20,30,40,50' at index 2 
var numbers = [10, 20, 30, 40 ,50];

var res = at(numbers, 2);

console.assert(res === 30);

//CASE returns '30' for arrays '10,20,30,40,50' at index -3
var numbers = [10, 20, 30, 40 ,50];

var res = at(numbers, -3);

console.assert(res === 30)

//CASE returns undefined
var numbers = [10, 20, 30, 40, 50];

var res = at(numbers, 10)

console.assert(res === undefined)
//  CASE valor negativo fuera de rango
var numbers = [10, 20, 30, 40, 50];

var res = at(numbers, -10)

console.assert(res === undefined)
//  Sin enviar un valor
var numbers = [10, 20, 30, 40, 50];

var res = at(numbers)

console.assert(res === 10)

