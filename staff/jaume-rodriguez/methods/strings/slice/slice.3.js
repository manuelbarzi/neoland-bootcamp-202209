function slice(string, indexStart, indexEnd){
    var result = ""

    if (indexEnd === undefined)
        indexEnd = string.length

    if (indexStart < 0)
        indexStart += string.length     //-> indexStart = indexStart + string.length

    for (i = indexStart; i < indexEnd; i++){
        result += string[i]
    }

    return result
}