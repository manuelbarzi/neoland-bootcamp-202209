//Aqui veremos si el objeto se ecuentra en el array, y si lo encuentre dara true 
var pets = ['dog', 'cat', 'coco', 'mouseperez', 'cigüeña']

var result = includes(pets, 'cat')

console.assert(result === true)

//En

var pets = ['dog', 'cat', 'coco', 'mouseperez', 'cigüeña']

var result = includes('cat', 40)

console.assert(result === false)