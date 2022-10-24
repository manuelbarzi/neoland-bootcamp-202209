// CASE: We have an array with numbers and we add to the same array the number 5
{
const arrayPush = [1, 2, 3, 4]
const elementToPush = 5

push (arrayPush, elementToPush)

console.assert(arrayPush instanceof Array)
console.assert(arrayPush.length === 5)
console.assert(arrayPush[0] === 1)
console.assert(arrayPush[1] === 2)
console.assert(arrayPush[2] === 3)
console.assert(arrayPush[3] === 4)
console.assert(arrayPush[4] === 5)
}

// CASE: We have an array with numbers and we add to the same array the number 5 and 10
{
const arrayPush = [1, 2, 3, 4]
const elementToPush = [10, 20]

push(arrayPush, ...elementToPush)
// push(arrayPush, 10, 20)

console.assert(arrayPush instanceof Array)
console.assert(arrayPush.length === 6)
console.assert(arrayPush[0] === 1)
console.assert(arrayPush[1] === 2)
console.assert(arrayPush[2] === 3)
console.assert(arrayPush[3] === 4)
console.assert(arrayPush[4] === 10)
console.assert(arrayPush[5] === 20)
}


// CASE: We have an array with strings and we add to the same array some strings
{
const arrayPush = ['BMW', 'Nissan', 'Porsche', 'kia']
const elementToPush = ['Mercedes', 'Ford', 'Seat']

push(arrayPush, ...elementToPush)

console.assert(arrayPush instanceof Array)
console.assert(arrayPush.length === 7)
console.assert(arrayPush[0] === 'BMW')
console.assert(arrayPush[1] === 'Nissan')
console.assert(arrayPush[2] === 'Porsche')
console.assert(arrayPush[3] === 'kia')
console.assert(arrayPush[4] === 'Mercedes')
console.assert(arrayPush[5] === 'Ford')
console.assert(arrayPush[6] === 'Seat')
}

// CASE: We have an array with strings and we add to the same array some strings
{
    const arrayPush = [10, 20, 30]
    const elementToPush = [40, [50, 60], 70]
    
    push(arrayPush, ...elementToPush)
    
    console.assert(arrayPush instanceof Array)
    console.assert(arrayPush.length === 6)
    console.assert(arrayPush[0] === 10)
    console.assert(arrayPush[1] === 20)
    console.assert(arrayPush[2] === 30)
    console.assert(arrayPush[3] === 40)
    console.assert(arrayPush[4][0] === 50)
    console.assert(arrayPush[4][1] === 60)
    console.assert(arrayPush[5] === 70)
    }