function toCapitalCase(text) {
    var lowers = 'abcdefghijklmnñopqrstuvwxyz'
    var uppers = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'

    var result = ''
     

    for (var i = 0; i < text.length; i++) {
        var prevChar = text[i - 1]
        var char = text[i]
        
        if ((prevChar === undefined || prevChar === '') && char !== ' ') {
            var char2 = undefined

            for (var j = 0; j < lowers.length && char2 !== char; j++) {
                char2 = lowers[j]

                if (char === char2) {
                    result += uppers[j]

                    break
                }
            }
        } else {
            result += char
        }
    }

    return result
}