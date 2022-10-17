
var includesTest = [1, 2, 3]

//CASE returns true for input value (2)

var result = includesArray(includesTest, 2)

console.assert(result === true)


//CASE returns false for input value (6)

var result2 = includesArray(includesTest, 6)
console.assert(result2 === false)

//CASE returns true with fromIndex argument

var result3 = includesArray(includesTest, 3, 2)
console.assert(result3 === true)

//CASE returns false with fromIndex argument

var result4 = includesArray(includesTest, 1, 2)
console.assert(result4 === false)


// if its negative, its equal to 0