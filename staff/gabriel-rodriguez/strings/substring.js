function substring(string, indexStart, indexEnd) {
    if (typeof string !== 'string') throw new TypeError(string + ' is not a string')

    var result = ''

    if (indexStart === indexEnd)
        return result

    if (indexStart > indexEnd) {
        var aux = indexStart

        indexStart = indexEnd

        indexEnd = aux
    }

    if (indexStart < 0)
        indexStart = 0

    if (!indexEnd || indexEnd > string.length)
        indexEnd = string.length

    for (var i = indexStart; i < indexEnd; i++) {
        var char = string[i]

        result = result + char
    }

    return result
}