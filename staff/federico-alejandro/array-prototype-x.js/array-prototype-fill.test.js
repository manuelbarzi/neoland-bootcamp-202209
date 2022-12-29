var numbers = [10, 20, 30, 40]

numbers.fill(0, 1, 3)

console.assert(numbers.length === 4)
console.assert(numbers[0] === 10)
console.assert(numbers[1] === 0)
console.assert(numbers[2] === 0)
console.assert(numbers[3] === 40)


var numbers = [10, 20, 30, 40]

numbers.fill(2, 1, 10)

console.assert(numbers.length === 10)
console.assert(numbers[0] === 10)
console.assert(numbers[1] === 2)
console.assert(numbers[2] === 2)
console.assert(numbers[3] === 2)
console.assert(numbers[4] === 2)
console.assert(numbers[5] === 2)
console.assert(numbers[6] === 2)
console.assert(numbers[7] === 2)
console.assert(numbers[8] === 2)
console.assert(numbers[9] === 2)

var numbers = [10, 20, 30, 40]

numbers.fill(2, 1, -10)

console.assert(numbers.length === 4)
console.assert(numbers[0] === 10)
console.assert(numbers[1] === 20)
console.assert(numbers[2] === 30)
console.assert(numbers[3] === 40)

var numbers = [10, 20, 30, 40]


numbers.fill(2, -10, -5)

console.assert(numbers.length === 4)
console.assert(numbers[0] === 10)
console.assert(numbers[1] === 20)
console.assert(numbers[2] === 30)
console.assert(numbers[3] === 40)

var numbers = [10, 20, 30, 40]

numbers.fill(2, 1)

console.assert(numbers.length === 4)
console.assert(numbers[0] === 10)
console.assert(numbers[1] === 2)
console.assert(numbers[2] === 2)
console.assert(numbers[3] === 2)


var numbers = [10, 20, 30, 40]

numbers.fill(2)

console.assert(numbers.length === 4)
console.assert(numbers[0] === 2)
console.assert(numbers[1] === 2)
console.assert(numbers[2] === 2)
console.assert(numbers[3] === 2)
