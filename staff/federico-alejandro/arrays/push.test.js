// CASE succes insert 3 strings into array
var animals = ['dog','cat','cow','pig']

var expectedAnimals = ['dog', 'cat', 'cow', 'pig', 'tiger', 'lion', 'horse']

var result = push(animals, 'tiger', 'lion', 'horse') //...animalsToAdd junta un array con el otro, sin los puntos  quedaria un array dentro de otro


console.assert(result === 7)
console.assert(animals.length === 7)


for (var i = 0; i < animals.length; i++) {
    console.assert(animals[i] === expectedAnimals[i])
}
