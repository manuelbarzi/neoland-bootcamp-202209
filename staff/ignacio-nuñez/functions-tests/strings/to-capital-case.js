function toCapitalCase(text) {
    var lowers = 'abcdefghijklmnñopqrstuvwxyz'
    var uppers = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'

    var result = ''

    for (var i = 0; i < text.length; i++) {
        var char = text[i]


        if ((text[i - 1] === ' ' || text[i - 1] === undefined) && text[i] !== ' ') {
            let char2

            for (var j = 0; j < lowers.length && char !== char2; j++) {
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