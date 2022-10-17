function slice(string, indexStart, indexEnd){
    var result = ""

    if (indexEnd === undefined)
        indexEnd = string.length

    for (i = indexStart; i < indexEnd; i++){
        result += string[i]
    }

    return result
}