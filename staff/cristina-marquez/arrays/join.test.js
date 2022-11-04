const myColors = ['yellow', 'green', 'blue']

//CASE returns all elements with ',' between them

var result1 = join(myColors);

console.assert(result1 === 'yellow,green,blue')

//CASE returns all elements with '-' between

var result2 = join(myColors, '-')

console.assert(result2 === 'yellow-green-blue')

//CASE returns all elements with no space between them

var result3 = join(myColors, '')

console.assert(result3 === 'yellowgreenblue')

