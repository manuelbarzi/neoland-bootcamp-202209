//Case

{

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

}


{
    
    const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    const shuffleArray = testArray.shuffle();
    
    console.assert(testArray.length === 10)
    console.assert(testArray[0] === 1)
    console.assert(testArray[1] === 2)
    console.assert(testArray[2] === 3)
    console.assert(testArray[3] === 4)
    console.assert(testArray[4] === 5)
    console.assert(testArray[5] === 6)
    console.assert(testArray[6] === 7)
    console.assert(testArray[7] === 8)
    console.assert(testArray[8] === 9)
    console.assert(testArray[9] === 10)

    
    console.assert(shuffleArray instanceof Array)
    console.assert(shuffleArray.length === 10)
    console.assert(shuffleArray.includes(1))
    console.assert(shuffleArray.includes(2))
    console.assert(shuffleArray.includes(3))
    console.assert(shuffleArray.includes(4))
    console.assert(shuffleArray.includes(5))
    console.assert(shuffleArray.includes(6))
    console.assert(shuffleArray.includes(7))
    console.assert(shuffleArray.includes(8))
    console.assert(shuffleArray.includes(9))
    console.assert(shuffleArray.includes(10))
    
    }

// console.log(shuffleArray)