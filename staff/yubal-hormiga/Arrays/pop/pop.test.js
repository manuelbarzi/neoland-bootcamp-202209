// //!The array.pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// //* CASE.1 myFish array containing four elements, then removes its last element.
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

var plantsLength = plants.length

result = pop(plants)


console.assert(result === 'tomato')
console.assert(plants.length === plantsLength-1)