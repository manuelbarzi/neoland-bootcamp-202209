// CASE converts 'hola' to 'Hola'

var word = 'hola'

var result = toCapitalCase(word)

console.assert(result === 'Hola')

// CASE converts 'mundo' to 'Mundo'

var word = 'mundo'

var result = toCapitalCase(word)

console.assert(result === 'Mundo')

// CASE converts random word with first letter to upper case

var lowers = 'abcdefghijklmnñopqrstuvwxyz'

var length = Math.round(Math.random() * 10)
var word = ''

for (var i = 0; i < length; i++) {
    var index = Math.round(Math.random() * 26)

    var char = lowers[index]

    word += char
}

var result = toCapitalCase(word)
var expected = word[0].toUpperCase() + word.substring(1)

console.assert(result === expected)