const spliceNumbers = [10,20,30,40,50,60]

spliceNumbers.splice(1, 0, 15)

console.assert(spliceNumbers[0] === 10)
console.assert(spliceNumbers[1] === 15)
console.assert(spliceNumbers[2] === 20)
console.assert(spliceNumbers[3] === 30)
console.assert(spliceNumbers[4] === 40)
console.assert(spliceNumbers[5] === 50)
console.assert(spliceNumbers[6] === 60)
