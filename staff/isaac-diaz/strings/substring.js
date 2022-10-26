function substring(string, indexStart, indexEnd) {
    var result = ''



    //Aqui miramos el caso en que el indexStart es negativo 
    if (indexStart < 0)
        indexStart = 0

    //Caso en el que el indexStart es mayor al indexEnd
    if (indexStart > indexEnd) {
        var newindexStart = indexEnd
        indexEnd = indexStart
        indexStart = newindexStart
    }

    if (!indexEnd || string.length < indexEnd) {
        indexEnd = string.length
    }

    for (var i = indexStart; i < indexEnd; i++) {
        var write = string[i]

        result = result + write
    }

    return result


    // if(indexEnd < indexStart) {
    //     for (var i = indexEnd; i < indexStart; i++) {
    //         write = string[i]

    //         result = result + write
    //     }    
    // } else {
    //     for (var i = indexStart; i < indexEnd; i++) {
    //         write = string[i]

    //         result = result + write

    //     }        
    // }

}

