//Case value = positive number

var sentence = 'I want to hack your computer and your cat'

var result = slice(sentence , 10)

console.assert(result === 'hack your computer and your cat')


//Case value = two numbers to obtain an String

var sentence = 'I want to hack your computer and your cat'

var result = slice(sentence , 10, 20)

console.assert(result === 'hack your ')


//Case value = two 0

var sentence = 'I want to hack your computer and your cat'

var result = slice(sentence , 0, 0)

console.assert(result === '')


//Case value = higest number

var sentence = 'I want to hack your computer and your cat'

var result = slice(sentence , 2000)

console.assert(result === '')


//Case value = both higest number

var sentence = 'I want to hack your computer and your cat'

var result = slice(sentence , 2000 , 2000)

console.assert(result === '')


//Case value = second higest number

var sentence = 'I want to hack your computer and your cat'

var result = slice(sentence , 0 , 2000)

console.assert(result === 'I want to hack your computer and your cat')


//Case value = negative number

var sentence = 'I want to hack your computer and your cat'

var result = slice(sentence , -8)

console.assert(result === 'your cat')


//Case value = two negative number

var sentence = 'I want to hack your computer and your cat'

var result = slice(sentence , -10, -3)

console.assert(result === 'd your ')


//Case value = first negative second positive

var sentence = 'I want to hack your computer and your cat'

var result = slice(sentence , -3, 10)

console.assert(result === '')


//Case value = first positive second negative

var sentence = 'I want to hack your computer and your cat'

var result = slice(sentence , 3, -10)

console.assert(result === 'ant to hack your computer an')


//Case value = first string second number

var sentence = 'I want to hack your computer and your cat'

var result = slice(sentence , 'hola', -10)

console.assert(result === 'I want to hack your computer an')


//Case value = first number second string

var sentence = 'I want to hack your computer and your cat'

var result = slice(sentence , -10, 'hola')

console.assert(result === '')

