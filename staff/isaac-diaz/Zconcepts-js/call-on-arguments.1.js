function add() {
    /*
    var result = 0

    Array.prototype.forEach.call(arguments, function(elem) {
        result += elem
    })

    return result
    */

    return Array.prototype.reduce.call(arguments, function(accum, elem) {
        return accum + elem
    })
}


console.log(add(1, 2, 3, 4, 5, 6))
// VM14209:18 21