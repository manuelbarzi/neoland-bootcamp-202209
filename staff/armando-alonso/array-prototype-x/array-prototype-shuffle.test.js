//Case
const testArray = [1, 2, 3, 4, 5, 6]

const shuffleArray = testArray.shuffle();

console.assert(testArray.length === 6)
console.assert(testArray[0] === 1)
console.assert(testArray[1] === 2)
console.assert(testArray[2] === 3)
console.assert(testArray[3] === 4)
console.assert(testArray[4] === 5)
console.assert(testArray[5] === 6)

console.assert(shuffleArray instanceof Array)
console.assert(shuffleArray.length === 6)
console.assert(shuffleArray.includes(1))
console.assert(shuffleArray.includes(2))
console.assert(shuffleArray.includes(3))
console.assert(shuffleArray.includes(4))
console.assert(shuffleArray.includes(5))
console.assert(shuffleArray.includes(6))

// console.log(shuffleArray)