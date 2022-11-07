// CASE converts 'hola' to 'Hola'

var word = 'hola'

var result = toCapitalCase(word)

console.assert(result === 'Hola')

// CASE converts 'mundo' to 'Mundo'

var word = 'hola'

var result = toCapitalCase(word)

console.assert(result === 'Hola')

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

// CASE converts random word with first letter to upper case

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

var result = toCapitalCase(word + ' ' + word2)
var expected = word[0].toUpperCase() + word.substring(1) + ' ' + word2[0].toUpperCase() + word2.substring(1)

console.assert(result === expected)
