var nums = {0: 10, 1: 20, 2: 30, length: 3}
var chars = ['a', 'b', 'c' ]
//Declaro variable, asgino Array.prototype.forEach y los vinculamos a nums(bind)
var forEachNum = Array.prototype.forEach.bind(nums)
var forEachChar = Array.prototype.forEach.bind(chars)

forEachNum(function(n) {console.log(n) })

var sum = 0
forEachNum(function(n) {sum += n})
console.log(sum)

forEachChar(function(c) {console.log(c) })

var str =''
forEachChar(function(n) {str += n})
console.log(str)