var nums = { 0: 10, 1: 20, 2: 30, length: 3 }
var chars = ['a', 'b', 'c']

//var forEachNum = Array.prototype.forEach.bind(nums)
//var forEachChar = Array.prototype.forEach.bind(chars)

function bind(func, ctx) {
    //debugger
    return function() {
        //debugger
        return func.apply(ctx, arguments)
    }
}

var forEachNum = bind(Array.prototype.forEach, nums)
var forEachChar = bind(Array.prototype.forEach, chars)


forEachNum(function(n) { console.log(n) })

var sum = 0
forEachNum(function(n) { sum += n })
console.log(sum)

forEachChar(function(c) { console.log(c) })

var str = ''
forEachChar(function(n) { str += n })
console.log(str)

