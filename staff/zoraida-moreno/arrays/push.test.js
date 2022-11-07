// CASE succes insert 3 strings into array
var animals = ['dog','cat','cow','pig']

var animalsToAdd = ['tiger','lion','horse']

var expectedAnimals = ['dog', 'cat', 'cow', 'pig', 'tiger', 'lion', 'horse']

var result = push(animals, ...animalsToAdd)
// IS THE SAME
// var result = push(animals, 'tiger', 'lion', 'horse')

// NO!!!!!!!!!!!!!!!
// var result = push(animals, ['tiger', 'lion', 'horse'])
// Esto anidaría un array en otro

console.assert(result === 7)
console.assert(animals.length === 7)


for (var i = 0; i < animals.length; i++) {
    console.assert(animals[i] === expectedAnimals[i])
}

// for (var i = 0; i < arguments.length; i++) {
//     var elementFound = array[array.length - arguments.length + i]

//     console.assrt(elementFound === arguments[i])
// }

// console.assert(animals[4] === arguments[0])
// console.assert(animals[5] === arguments[1])
// console.assert(animals[6] === arguments[2])