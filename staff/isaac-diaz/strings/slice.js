function sliceParrafo(string, indexStart, indexEnd) {
    var result = ''
    
    if (indexEnd < 0) indexEnd = string.length + indexEnd

    if (indexStart < 0) indexStart = string.length + indexStart

    if (indexStart < 0) indexStart = 0

    // if(indexStart < 0 && indexStart *-1 > string.length) indexStart = 0

    if (indexEnd === undefined || indexEnd > string.length) indexEnd = string.length

    for (var i = indexStart; i < indexEnd; i++) {
        result += string[i]


    }
    return result
}
