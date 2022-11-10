//CASE succes, find a worth existing on the array, without giving a starting position

var planets = [ 'mars', 'earth', 'uranus', 'jupiter']

var result = includes(planets, 'mars')

console.assert( result === true)

//CASE succes, find a worth existing on the array, giving a negative starting position

var planets = [ 'mars', 'earth', 'uranus', 'jupiter']

var result = includes(planets, 'mars', -20)

console.assert( result === true)

//CASE fails, find a worth existing on the array, giving a starting position

var planets = [ 'mars', 'earth', 'uranus', 'jupiter']

var result = includes(planets, 'mars', 2)

console.assert( result === false)

//CASE fails, giving just an array

var planets = [ 'mars', 'earth', 'uranus', 'jupiter']

var result = includes(planets)

console.assert( result === false)

