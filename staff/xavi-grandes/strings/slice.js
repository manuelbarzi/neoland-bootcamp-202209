// slice(indexStart, indexEnd)

function slice (string, indexStart, indexEnd = string.length){
    
    var result = ''

    if (indexStart < 0){
        indexStart = string.length + indexStart
    }

    if (indexEnd < 0){
        indexEnd = string.length + indexEnd
    }

    if (indexEnd < indexStart){
        var aux = indexStart
        indexStart = indexEnd
        indexEnd = aux
    }

    for (var i = indexStart; i < indexEnd; i++){
        var result = result + string[i];
    }
    return result
}

