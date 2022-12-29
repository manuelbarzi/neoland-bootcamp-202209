// CASE converts 'hola yo 'Hola'

var word = 'hola'
var result = toCapitalCase(word)

console.assert(result === 'Hola')

// CASE converts 'mundo to 'Mundo'

var word = 'hola'
var result = toCapitalCase(word)

console.assert(result === 'Hola')

// CASE converts random word with firts letter to upper case

var lowers = 'abcdefghijklmnñopqrstuvwxyz'

var length = Math.round(Math.random() * 10)
var word = ''

for (var i = 0; i < length; i++) {
    var index = Math.round(Math.random() * 26)

    var char = lowers[index]

    word += char
}

var length2 = Math.round(Math.random() * 10)
var word2 = ''

for (var i = 0; i < length2; i++) {
    var index = Math.round(Math.random() * 26)

    var char = lowers[index]

    word2 += char
}

var space1 = ' '.repeat(Math.round(Math.random() * 10))
var space2 = ' '.repeat(Math.round(Math.random() * 10))
var space3 = ' '.repeat(Math.round(Math.random() * 10))


var result = toCapitalCase(space1 + word + space2 + word2 + space3)
var expected = space1 + word[0].toUpperCase() + word.substring(1) + space2 + word2[0].toUpperCase() + word2.substring(1) + space3

console.assert(result === expected)