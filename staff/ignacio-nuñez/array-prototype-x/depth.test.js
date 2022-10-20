const depthNumbers = [1, [2, 3], [4, [5, 6]], 7]

const depthResult = depthNumbers.depth()

console.assert(depthResult === 2)

var depthNumbers2 = [1, [2, 3], [4, [5, [6]]], 7]

const depthResult2 = depthNumbers2.depth()

console.assert(depthResult2 === 3)

var depthNumbers3 = [1, 2, [3, 4], 5, 6, 7]

const depthResult3 = depthNumbers3.depth()

console.assert(depthResult3 === 1)