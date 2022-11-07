
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']

var plantsLength = plants.length

result = pop(plants)


console.assert(result === 'tomato') //comprobación de elemento que quiero eliminar
console.assert(plants.length === plantsLength-1) //comprobación de que el elemento se borro

