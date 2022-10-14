function slice(string, indexStart, indexEnd){
    var result = ""

    if (indexEnd === undefined)
        indexEnd = string.length

    if (indexStart < 0)
        indexStart += string.length     //-> indexStart = indexStart + string.length

    if (indexEnd < 0)
        indexEnd += string.length     //-> indexEnd = indexEnd + string.length

    for (i = indexStart; i < indexEnd; i++){
        result += string[i]
    }

    return result
}