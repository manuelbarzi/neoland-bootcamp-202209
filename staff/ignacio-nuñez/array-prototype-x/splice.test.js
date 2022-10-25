// case insert 15 in array, without delete any element
const spliceNumbers = [10,20,30,40,50,60]

let result = spliceNumbers.splice(1, 0, 15)

console.assert(result.length === 0)

console.assert(spliceNumbers.length === 7)
console.assert(spliceNumbers[0] === 10)
console.assert(spliceNumbers[1] === 15)
console.assert(spliceNumbers[2] === 20)
console.assert(spliceNumbers[3] === 30)
console.assert(spliceNumbers[4] === 40)
console.assert(spliceNumbers[5] === 50)
console.assert(spliceNumbers[6] === 60)

// case insert 15 on the array, deleting number 20
const spliceNumbers2 = [10,20,30,40,50,60]

let result2 =spliceNumbers2.splice(1, 1, 15)

console.assert(result2.length === 1)
console.assert(result2[0] === 20)

console.assert(spliceNumbers2.length === 6)
console.assert(spliceNumbers2[0] === 10)
console.assert(spliceNumbers2[1] === 15)
console.assert(spliceNumbers2[2] === 30)
console.assert(spliceNumbers2[3] === 40)
console.assert(spliceNumbers2[4] === 50)
console.assert(spliceNumbers2[5] === 60)

// case insert 15 in array, without delete any element
const spliceNumbers3 = [10,20,30,40,50,60]

let result3 = spliceNumbers3.splice(3, 0, 15, 25, 35, 45)

console.assert(result3.length === 0)

console.assert(spliceNumbers3.length === 10)
console.assert(spliceNumbers3[0] === 10)
console.assert(spliceNumbers3[1] === 20)
console.assert(spliceNumbers3[2] === 30)
console.assert(spliceNumbers3[3] === 15)
console.assert(spliceNumbers3[4] === 25)
console.assert(spliceNumbers3[5] === 35)
console.assert(spliceNumbers3[6] === 45)
console.assert(spliceNumbers3[7] === 40)
console.assert(spliceNumbers3[8] === 50)
console.assert(spliceNumbers3[9] === 60)

// case insert 15 on the array, deleting number 20
const spliceNumbers4 = [10,20,30,40,50,60,70,80]

let result4 =spliceNumbers4.splice(5, 3, 15, 25, 35)

console.assert(result4.length === 3)
console.assert(result4[0] === 60)
console.assert(result4[1] === 70)   
console.assert(result4[2] === 80)

console.assert(spliceNumbers4.length === 8)
console.assert(spliceNumbers4[0] === 10)
console.assert(spliceNumbers4[1] === 20)
console.assert(spliceNumbers4[2] === 30)
console.assert(spliceNumbers4[3] === 40)
console.assert(spliceNumbers4[4] === 50)
console.assert(spliceNumbers4[5] === 15)
console.assert(spliceNumbers4[6] === 25)
console.assert(spliceNumbers4[7] === 35)

//case delete 3 items from position 1, and adding none
const spliceNumbers5 = [10,20,30,40,50,60,70,80]

let result5 =spliceNumbers5.splice(1, 3)

console.assert(result5.length === 3)
console.assert(result5[0]=== 20)
console.assert(result5[1]=== 30)
console.assert(result5[2]=== 40)

console.assert(spliceNumbers5.length === 5)
console.assert(spliceNumbers5[0] === 10)
console.assert(spliceNumbers5[1] === 50)
console.assert(spliceNumbers5[2] === 60)
console.assert(spliceNumbers5[3] === 70)
console.assert(spliceNumbers5[4] === 80)

//case delete 3 items from position 3, and adding none
const spliceNumbers6 = [10,20,30,40,50,60,70,80]

let result6 =spliceNumbers6.splice(3, 3)

console.assert(result6.length === 3)
console.assert(result6[0]=== 40)
console.assert(result6[1]=== 50)
console.assert(result6[2]=== 60)

console.assert(spliceNumbers6.length === 5)
console.assert(spliceNumbers6[0] === 10)
console.assert(spliceNumbers6[1] === 20)
console.assert(spliceNumbers6[2] === 30)
console.assert(spliceNumbers6[3] === 70)
console.assert(spliceNumbers6[4] === 80)

//case giving a start position and nothing else
const spliceNumbers7 = [10,20,30,40,50,60,70,80]

let result7 =spliceNumbers7.splice(3)   

console.assert(result7.length === 0)

console.assert(spliceNumbers7.length === 8)
console.assert(spliceNumbers7[0] === 10)
console.assert(spliceNumbers7[1] === 20)
console.assert(spliceNumbers7[2] === 30)
console.assert(spliceNumbers7[3] === 40)
console.assert(spliceNumbers7[4] === 50)
console.assert(spliceNumbers7[5] === 60)
console.assert(spliceNumbers7[6] === 70)
console.assert(spliceNumbers7[7] === 80)