function indexof(sentence,word){

    var vword = word

    var position = []

    var n = 0;
    
    for (var i = 0; i < sentence.length; i++) {
        var nword = '';
        if (vword[0] === sentence[i]){

        for (var j = 0; j < word.length && vword[j] === sentence[i + j]; j++) {
            
            nword = nword + sentence[i + j];
            }
        if (nword.length === word.length) {
                position[n] = i
                n++   
            }
        }
    }
    return position
}