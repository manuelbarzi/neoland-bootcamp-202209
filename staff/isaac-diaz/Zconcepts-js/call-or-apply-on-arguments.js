var nums = [10, 20, 30]
var chars = ['a', 'b', 'c']
var booleans = [true, false]

function concat() {
    //return Array.prototype.concat.apply([], arguments) 
    return Array.prototype.concat.call([], ...arguments)
}

console.log(concat(nums, chars, booleans))
VM17526:10 (8) [10, 20, 30, 'a', 'b', 'c', true, false]
undefined