/*var sliceVar = "hola mundo"*/

function slice(string, indexStart, indexEnd) {
    var result = ''

    if (indexStart === indexEnd)
        return result

    if (indexStart > indexEnd){
    return result
        }
    if (indexStart < 0)
    indexStart = 0
   
    if (!indexEnd || indexEnd > string.length)
    indexEnd = string.length

    for (var i = indexStart; i < indexEnd; i++) {
    var j = string[i]

    result = result + j
}

return result
}