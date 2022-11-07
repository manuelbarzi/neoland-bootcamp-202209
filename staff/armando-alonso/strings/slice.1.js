function slice(sentence , value) {
    
    var newSentence = ''

    for (let i = value; i < sentence.length; i++) {
        newSentence = newSentence + sentence[i];
        
    }
    return newSentence
}