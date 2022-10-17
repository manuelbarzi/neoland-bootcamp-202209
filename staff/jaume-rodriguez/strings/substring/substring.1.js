function substring(string, indexStart, indexEnd) {
    var result = ''

    for (var i = indexStart; i < indexEnd; i++) {
        var char = string[i]

        result = result + char
    }

    return result
}