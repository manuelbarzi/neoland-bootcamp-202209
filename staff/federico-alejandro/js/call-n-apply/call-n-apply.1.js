var nums = [10, 20, 30]

nums.forEach(function(n) {
    console.log(n)
})

var chars = { 0: 'a', 1: 'b', 2: 'c', length: 3}

Array.prototype.forEach.call(chars, function(c) {
    console.log(c)
})

Array.prototype.forEach.apply(chars, [function(c) {
    console.log(c)  
}])

// 2
console.log(nums.toString())

Array.prototype.toString = function() {
    var str = '['

    for ( var i = 0; i < this.length; i++) {
        str += this[i]

        if (i < this.length - 1) str += ','
    }

    str += ']'
    return str
}
console.log(nums.toString())

console.log(chars.toString())

console.log(Array.prototype.toString.call(chars))
console.log(Array.prototype.toString.apply(chars))

// 3
Array.prototype.forEachAndMap = function(forEachCallback, mapCallback) {
    var result = []

    for ( var i = 0; i < this.length; i++) {
        var elem = this[i]

        forEachCallback(elem)

        var result = mapCallback(elem)

        result.push(result)
    }
    return result
}

console.log(nums.forEachAndMap(function(n) {
    console.log(n)
}, function(n) {
    return n * 100
}))

console.log(array.prototype.forEachAndMap.call(chars, function(c) {
    console.log(c)
}, function(c) {
    return c.toUpperCase()
}))

console.log(Array.prototype.forEachAndMap.apply(chars, [function(c) {

}, function(c) {
   return c.toUpperCase()
}]))