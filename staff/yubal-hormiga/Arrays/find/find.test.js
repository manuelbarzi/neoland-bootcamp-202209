//! The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

// //*CASE 1 iF you need to find values > a number,
var ns = [10, 20, 30, 40, 50]
var r = 10
var index = ''
var result =[]

var addToResult = function(n) {
    return (n > r && result.length < 1)
}

find(ns,index, addToResult)

console.assert(result[0] === 20)
