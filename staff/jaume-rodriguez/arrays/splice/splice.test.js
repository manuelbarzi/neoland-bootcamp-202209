// CASE 1

const spArray1 = ['a', 'b', 'd', 'e']

let spResult1 = splice(spArray1, 2, 0, 'c')

// CASE 2

const spArray2 = ['f', 'b', 'c', 'd', 'e']

let spResult2 = splice(spArray2, 0, 1, 'a')

// CASE 3

const spArray3 = ['b', 'c', 'd', 'e']

let spResult3 = splice(spArray3, 0, 0, 'a')

// CASE 4

const spArray4 = ['a', 'b', 'r', 'd', 'e']

let spResult4 = splice(spArray4, 2, 1, 'c')