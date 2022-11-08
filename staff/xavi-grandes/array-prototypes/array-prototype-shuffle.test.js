const orderedArray = [50, 30, 80, 64, 58, 65]

const shuffledArray = orderedArray.shuffle();

console.assert(orderedArray.length === 6)
console.assert(orderedArray[0] === 50)
console.assert(orderedArray[1] === 30)
console.assert(orderedArray[2] === 80)
console.assert(orderedArray[3] === 64)
console.assert(orderedArray[4] === 58)
console.assert(orderedArray[5] === 65)

console.assert(shuffledArray instanceof Array)
console.assert(shuffledArray.length === 6)
console.assert(shuffledArray.includes(50))
console.assert(shuffledArray.includes(30))
console.assert(shuffledArray.includes(80))
console.assert(shuffledArray.includes(64))
console.assert(shuffledArray.includes(58))
console.assert(shuffledArray.includes(65))
