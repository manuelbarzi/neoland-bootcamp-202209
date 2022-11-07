function substring(string, indexStart, indexEnd) {
    var result = ''

    if (indexStart > indexEnd) {
        var aux = indexStart

        indexStart = indexEnd

        indexEnd = aux
    }

    if (indexEnd || indexEnd > string.length)
        indexEnd = string.length

    for (var i = indexStart; i < indexEnd; i++) {
        var char = string[i]

        result = result + char
    }

    return result
}