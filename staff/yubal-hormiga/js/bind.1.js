var nums = { 0: 10, 1: 20, 2: 30, length: 3 }
var chars = ['a', 'b', 'c']

var forEachNum = Array.prototype.forEach.bind(nums)
var forEachChar = Array.prototype.forEach.bind(chars)

forEachNum(function(n) { console.log(n) })

var sum = 0
forEachNum(function(n) { sum += n })
console.log(sum)

forEachChar(function(c) { console.log(c) })

var str = ''
forEachChar(function(n) { str += n })
console.log(str)
// VM20833:7 10
// VM20833:7 20
// VM20833:7 30
// VM20833:11 60
// VM20833:13 a
// VM20833:13 b
// VM20833:13 c
// VM20833:17 abc
// undefined