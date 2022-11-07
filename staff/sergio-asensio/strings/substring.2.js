function substring(string, indexStart, indexEnd) {
    var result = ''

    if (!indexEnd)
        indexEnd = string.length
        
    for (var i = indexStart; i < indexEnd; i++){
        var char = string[i]

        result = result + char
    }

    return result
}