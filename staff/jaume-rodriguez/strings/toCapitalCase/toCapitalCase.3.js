function toCapitalCase(text) {
    var lowers = 'abcdefghijklmnñopqrstuvwxyz'
    var uppers = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'

    var result

    for (var i = 0; i < text.length; i++) {
        var char = text[i]
        
        if (i === 0) {
            for (var j = 0; j < lowers.length; j++) {
                var char2 = lowers[j]

                if (char === char2) {
                    result = uppers[j]

                    break
                }
            }
        } else {
            result += char
        }
    }

    return result
}