// Case value = 2

var wordRepeat = 'hola'

var result = repeat(wordRepeat, 5)

console.assert(result === 'holaholaholaholahola')


// Case value = negative number

var wordRepeat = 'hola'

try {
    var result = repeat(wordRepeat, -1)
} catch (error) {
    result = error
}

console.assert(result instanceof Error)
console.assert(result.message === 'Uncaught RangeError: Invalid count value: ' + -1)


//Case value = 0

var wordRepeat = 'hola'

var result = repeat(wordRepeat, 0)

console.assert(result === '')


//Case value = Decimal

var wordRepeat = 'hola'

var result = repeat(wordRepeat, 6.9)

console.assert(result === 'holaholaholaholaholahola')


// Case value = Infinity

var wordRepeat = 'hola'

try {
    var result = repeat(wordRepeat, 1/0)
} catch (error) {
    result = error
}

console.assert(result instanceof Error)
console.assert(result.message === 'Uncaught RangeError: Invalid count value: Infinity')

