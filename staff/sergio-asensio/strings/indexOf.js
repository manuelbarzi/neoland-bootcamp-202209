function indexOf(string,look, index = 0){

    var wordtolook = ''
    var pos = ''
    var result = ''

    for (i = index ; i < string.length ; i++) {
        wordtolook = wordtolook + string[i]
        
            if(look === wordtolook){
            result = look
            return result
        }

    }
}