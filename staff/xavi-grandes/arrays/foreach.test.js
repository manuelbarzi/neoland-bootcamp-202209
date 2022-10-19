// CASE 1: multiply all numbers of the array plus 10
{
var array = [10, 20, 30, 40, 50];
var callbackForEach = function multiply (number){ return number * 10}

const resultForEach = forEach(array, callbackForEach)

console.assert(resultForEach instanceof Array)
console.assert(resultForEach[0] === 100)
console.assert(resultForEach[1] === 200)
console.assert(resultForEach[2] === 300)
console.assert(resultForEach[3] === 400)
console.assert(resultForEach[4] === 500)
}
// CASE 2: add a string 'index' inside all the elements
{
var array = [1, 2, 3, 4, 5];
var callbackForEach = function addIndexString (number){ return 'Index ' + number}

const resultForEach = forEach(array, callbackForEach)

console.assert(resultForEach instanceof Array)
console.assert(resultForEach[0] === 'Index 1')
console.assert(resultForEach[1] === 'Index 2')
console.assert(resultForEach[2] === 'Index 3')
console.assert(resultForEach[3] === 'Index 4')
console.assert(resultForEach[4] === 'Index 5')
}