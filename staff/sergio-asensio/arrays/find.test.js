//CASE with numbers and one condition

var array=[4, 8, 13, 64]
var condition = (element) => element > 10

var result =  find(array, condition)

console.assert(result === 13)


//CASE with numbers and  a wrong condition

var array=[4, 8, 13, 64]
var condition = (element) => element > 70

var result =  find(array, condition)

console.assert(result === 'undefined')


//CASE with strings and true condition

var array=['uno,', 'seta', 'ventana', 'pop']
var condition = (element) => element.length > 5

var result =  find(array, condition)

console.assert(result === 'ventana')


//CASE with strings and numbers 

var array=[17, 'seta', 'ventana', 34]
var condition = (element) => typeof element === 'number' && element < 20

var result =  find(array, condition)

console.assert(result === 17)



