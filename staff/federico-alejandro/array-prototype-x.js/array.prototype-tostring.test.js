var chars = ['a', 'b', 'c']
var char = chars.toString()


console.assert(typeof char === 'string')
console.assert(char === 'a,b,c')

//var num = [10, 20, 30]
var nums = [10, 20, 30]
var numbers = nums.toString()

console.assert(numbers.length === 3)
console.assert(numbers[0] === 10)
console.assert(numbers[1] === 20)
console.assert(numbers[2] === 30)


var a = [10, 20, 'a', '1a']
var b = a.toString()

console.assert(b.length === 4)
console.assert(b[0] === 10)
console.assert(b[1] === 20)
console.assert(b[2] === 'a')
console.assert(b[3] === '1a')