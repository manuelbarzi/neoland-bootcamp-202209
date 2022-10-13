function substring(string, indexStart, indexEnd) {
    var result = ''

    if (indexStart > indexEnd){
        var indexChangeDirection = indexStart
        
        indexStart = indexEnd
        indexEnd = indexChangeDirection
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