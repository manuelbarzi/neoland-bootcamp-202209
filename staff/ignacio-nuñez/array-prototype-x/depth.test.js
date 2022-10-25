const depthNumbers = [1, [2, 3], [4, [5, 6]], 7]

const depthResult = depthNumbers.depth()

console.assert(depthResult === 2)

const depthNumbers2 = [1, [2, 3], [4, [5, [6]]], 7]

const depthResult2 = depthNumbers2.depth()

console.assert(depthResult2 === 3)

var depthNumbers3 = [1, 2, [3, 4], 5, 6, 7]

const depthResult3 = depthNumbers3.depth()

console.assert(depthResult3 === 1)


const depthNumbers4 = [1, 2, 3, 4, 5, 6, 7]

const depthResult4 = depthNumbers4.depth()

console.assert(depthResult4=== 0)