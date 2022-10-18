// Case "Neoland" exists into the string all times that you want

var sentence = 'The web developer course of Neoland school is really difficult Neoland claro que si guapi Neoland'

var word = 'Neoland'

var result = indexof(sentence,word)

for (var i = 0; i < result.length; i++) {
    var element = result[i]
    console.assert(result[i] === element)
}


// Case var "sentence" is not a string

var sentence = true

var word = 'Neoland'

try {
    var result = indexof(sentence,word)
} catch (error) {
    result = error

    console.assert(result instanceof Error)
    console.assert(result.message === 'Please, put a String to check it')
}
    

// Case var "word" is not a string

var sentence = 'The web developer course of Neoland school is really difficult Neoland claro que si guapi Neoland'

var word = 6

try {
    var result = indexof(sentence,word)
} catch (error) {
    result = error

    console.assert(result instanceof Error)
    console.assert(result.message === 'Please, put a String to check it')
}


// Case var "word" is not a string

var sentence = ''

var word = 'Neoland'

try {
    var result = indexof(sentence,word)
} catch (error) {
    result = error

    console.assert(result instanceof Error)
    console.assert(result.message === 'Please, write a something')
}

