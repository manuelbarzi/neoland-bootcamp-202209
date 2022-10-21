Array.prototype.addAll = function() {
    var result = this[0]

    for (var i = 1; i < this.length; i++)
        result += this[i]

    return result
}

var nums = [10, 20, 30, 40, 50]

console.log(nums.addAll())

var chars = ['a', 'b', 'c', 'd', 'e']

console.log(chars.addAll())

function add() {
    return Array.prototype.addAll.call(arguments)
}

console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9))
