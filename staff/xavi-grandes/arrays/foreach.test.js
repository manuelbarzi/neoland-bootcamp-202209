// CASE 1: multiply all numbers of the array plus 10

var array = [10, 20, 30, 40, 50];
var callbackForEach = function multiply (number){ return number * 10}

const resultForEach = forEach(array, callbackForEach)

console.assert(resultForEach instanceof Array)
console.assert(resultForEach[0] === 100)
console.assert(resultForEach[1] === 200)
console.assert(resultForEach[2] === 300)
console.assert(resultForEach[3] === 400)
console.assert(resultForEach[4] === 500)

// CASE 1: add a string 'index' inside all the elements