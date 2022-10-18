function slice(sentence , value , value2 = 1/0) {
    
    var newValue = sentence.length

    var newValue2

    var newSentence = ''

    if (value < 0) { 
        newValue = sentence.length + value

        value = newValue
    }

    if (value2 < 0) { 
        newValue2 = sentence.length + value2

        value2 = newValue2
    }

    for (let i = value; i < sentence.length && i < value2; i++) {
        newSentence = newSentence + sentence[i];

    }
    return newSentence
}