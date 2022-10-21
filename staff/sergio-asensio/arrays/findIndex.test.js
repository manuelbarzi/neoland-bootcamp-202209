//CASE array with strings and return the position of the first element.bigger than three

var array = ['cat', 'rat', 'pig', 'tiger']
var condition = (element) => element.length > 3

var result = findIndex(array,condition)

console.assert( result === 3)



//CASE array with strings that doesn't meet the condition

var array = ['cat', 'rat', 'pig', 'tiger']
var condition = (element) =>  typeof element === 'number'

var result = findIndex(array,condition)


console.assert( result === -1)



//CASE array with strings and number that meet the condition

var array = ['cat', 'rat', 55, 'tiger']
var condition = (element) => (element >= 0 || element < 0)

var result = findIndex(array,condition)

console.assert( result === 2)



//CASE array with strings and nuumbers that meet the condition

var array = [34, 'rat', 55, 'tiger']
var condition = (element) => typeof element === 'number'



var result = findIndex(array,condition)

console.assert( result === 0)


//CASE array without elements

var array = []
var condition = (element) => (element >= 0 || element < 0)

var result = findIndex(array,condition)

console.assert( result === -1)






