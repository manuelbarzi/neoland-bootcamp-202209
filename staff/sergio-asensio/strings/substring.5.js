function substring(string, indexStart, indexEnd) {
    var result = ''

    if (indexStart > indexEnd) {
        var aux = indexStart

        indexStart = indexEnd

        indexEnd = aux
    }

    if (indexStart < 0)
        indexStart = 0
        
    if (indexEnd || indexEnd > string.length)
        indexEnd = string.length

    for (var i = indexStart; i < indexEnd; i++) {
        var char = string[i]

        result = result + char
    }

    return result
}