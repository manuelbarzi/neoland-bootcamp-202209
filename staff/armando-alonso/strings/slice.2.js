function slice(sentence , value , value2 = 1/0) {
    
    var newValue = sentence.length

    var newSentence = ''

    if (value < 0) { 
        newValue = sentence.length + value

        value = newValue
    }

    for (let i = value; i < sentence.length && i < value2; i++) {
        newSentence = newSentence + sentence[i];

    }
    return newSentence
}