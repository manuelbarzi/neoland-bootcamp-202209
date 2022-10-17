// CASE maps names to upper case ones

var names = ['john', 'katty', 'andy', 'robert', 'mary']

var namesInUpperCase
var toUpperCase = function (text) { return text.toUpperCase() }

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