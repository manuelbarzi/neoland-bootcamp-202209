// sintaxis substring(indexStart, indexEnd)

function substring(string, indexStart, indexEnd = string.length){
    // si indexEnd no tiene valor = por defecto es = a valor de la longitud del texto 
    var result = '' 

    // if (indexEnd === undefined)
    //     indexEnd = string.length
    
    if (indexEnd > string.length)
    indexEnd = string.length

    // esta formula es la suma de las 2 anteriores
    // if (!indexEnd || indexEnd > string.length)
    // indexEnd = string.length
    
    if (indexStart === indexEnd)
        return result

    if (indexStart < 0)
        indexStart = 0

    if (indexStart > indexEnd){
        var aux = indexEnd    
        indexEnd = indexStart
        indexStart = aux
    }

    for (var i = indexStart; i < indexEnd; i++){
        var char = string[i]

        result = result + char
    }
    
    return result
}


