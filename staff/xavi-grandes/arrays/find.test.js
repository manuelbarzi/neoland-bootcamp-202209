// CASE 1: Find the first number more than 10

var arrayFind1 = [5, 12, 8, 130, 44]
var callback = function lessThan10(element){
    return element > 10
} 

const resultFind = find(arrayFind1, callback)

console.assert(resultFind === 12)
