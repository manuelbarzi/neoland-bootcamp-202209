const aShuffle = [1, 2, 3, 4, 5, 6]

const resultShuffle = aShuffle.shuffle()

console.assert(aShuffle.includes(resultShuffle[0]))
console.assert(aShuffle.includes(resultShuffle[1]))
console.assert(aShuffle.includes(resultShuffle[2]))
console.assert(aShuffle.includes(resultShuffle[3]))
console.assert(aShuffle.includes(resultShuffle[4]))
console.assert(aShuffle.includes(resultShuffle[5]))

console.assert(aShuffle[0] === 1)
console.assert(aShuffle[1] === 2)
console.assert(aShuffle[2] === 3)
console.assert(aShuffle[3] === 4)
console.assert(aShuffle[4] === 5)
console.assert(aShuffle[5] === 6)

console.assert(aShuffle.length === resultShuffle.length)

const resultShuffle2 = aShuffle.shuffle()

const resultShuffle3 = aShuffle.shuffle()

const resultShuffle4 = aShuffle.shuffle()