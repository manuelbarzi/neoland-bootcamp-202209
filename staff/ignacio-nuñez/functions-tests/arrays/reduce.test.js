//CASE succes, adding all five elements, starting from 0 
var numbers = [1, 2, 3, 4, 5]

var result = reduce(numbers, (a,b) => a+b)

console.assert(result === 15)
console.assert(numbers[0] === 1)
console.assert(numbers[1] === 2)
console.assert(numbers[2] === 3)
console.assert(numbers[3] === 4)
console.assert(numbers[4] === 5)

//CASE succes, adding all five elements, starting from 10
var numbers = [1, 2, 3, 4, 5]

var result = reduce(numbers, (a,b) => a+b, 10)

console.assert(result === 25)
console.assert(numbers[0] === 1)
console.assert(numbers[1] === 2)
console.assert(numbers[2] === 3)
console.assert(numbers[3] === 4)
console.assert(numbers[4] === 5)

//CASE succes, multiply all five elements, starting from 0
var numbers = [1, 2, 3, 4, 5]

var result = reduce(numbers, (a,b) => a*b)

console.assert(result === 120)
console.assert(numbers[0] === 1)
console.assert(numbers[1] === 2)
console.assert(numbers[2] === 3)
console.assert(numbers[3] === 4)
console.assert(numbers[4] === 5)

//CASE succes, multiply all five elements, starting from 10
var numbers = [1, 2, 3, 4, 5]

var result = reduce(numbers, (a,b) => a*b, 10)

console.assert(result === 1200)

//CASE succes, resting all five elements, starting from 0
var numbers = [1, 2, 3, 4, 5]

var result = reduce(numbers, (a,b) => a-b)

console.assert(result === -13)
console.assert(numbers[0] === 1)
console.assert(numbers[1] === 2)
console.assert(numbers[2] === 3)
console.assert(numbers[3] === 4)
console.assert(numbers[4] === 5)

//CASE succes, resting all five elements, starting from 5
var numbers = [1, 2, 3, 4, 5]

var result = reduce(numbers, (a,b) => a-b, 5)

console.assert(result === -10)
console.assert(numbers[0] === 1)
console.assert(numbers[1] === 2)
console.assert(numbers[2] === 3)
console.assert(numbers[3] === 4)
console.assert(numbers[4] === 5)

//CASE succes, dividing all five elements, starting from 0
var numbers = [1, 2, 3, 4, 5]


var result = reduce(numbers, (a,b) => a/b)

console.assert(result === 0.008333333333333333)
console.assert(numbers[0] === 1)
console.assert(numbers[1] === 2)
console.assert(numbers[2] === 3)
console.assert(numbers[3] === 4)
console.assert(numbers[4] === 5)

//CASE succes, dividing all five elements, starting from 10
var numbers = [1, 2, 3, 4, 5]

var result = reduce(numbers, (a,b) => a/b, 10)

console.assert(result === 0.08333333333333334)
console.assert(numbers[0] === 1)
console.assert(numbers[1] === 2)
console.assert(numbers[2] === 3)
console.assert(numbers[3] === 4)
console.assert(numbers[4] === 5)

//CASE succes, use concat to down 1 level of arrays
var numbers = [[0,1], [2,3], [4,5]]

var result = reduce(numbers, (a,b) => a.concat(b))

console.assert(result[0] === 0)
console.assert(result[1] === 1)
console.assert(result[2] === 2)
console.assert(result[3] === 3)
console.assert(result[4] === 4)
console.assert(result[5] === 5)

console.assert(numbers[0][0] === 0)
console.assert(numbers[0][1] === 1)
console.assert(numbers[1][0] === 2)
console.assert(numbers[1][1] === 3)
console.assert(numbers[2][0] === 4)
console.assert(numbers[2][1] === 5)

//CASE succes, use concat to down 1 level of arrays, and adding one more element with starting position
var numbers = [[0,1], [2,3], [4,5]]

var result = reduce(numbers, (a,b) => a.concat(b), [10])

console.assert(result[0] === 10)
console.assert(result[1] === 0)
console.assert(result[2] === 1)
console.assert(result[3] === 2)
console.assert(result[4] === 3)
console.assert(result[5] === 4)
console.assert(result[6] === 5)

console.assert(numbers[0][0] === 0)
console.assert(numbers[0][1] === 1)
console.assert(numbers[1][0] === 2)
console.assert(numbers[1][1] === 3)
console.assert(numbers[2][0] === 4)
console.assert(numbers[2][1] === 5)

