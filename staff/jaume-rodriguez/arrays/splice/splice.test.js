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

// CASE 5

const spArray5 = ['a', 'b', 'c', 'e']

let spResult5 = splice(spArray5, -1, 0, 'd')

// CASE 6

const spArray6 = ['h', 'b', 'c', 'e']

let spResult6 = splice(spArray6, -100, 1, 'a')

// CASE 7

const spArray7 = ['a', 'b', 'c', 'd', 'e']

let spResult7 = splice(spArray7, 10, 1, 'f')

// CASE 8

const spArray8 = ['a', 'b', 'c', 'd', 'e', 'z']

let spResult8 = splice(spArray8, 5, 1, 'f', 'g', 'h', 'i', 'j')