
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

var plantsLength = plants.length

result = pop(plants)


console.assert(result === 'tomato')
console.assert(plants.length === plantsLength-1)