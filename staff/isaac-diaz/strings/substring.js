function substring(string, indexStart, indexEnd) {
    var result = ''

    
    //En este caso da igual el orden en como nos de el valor
    if (newIndexEnd = indexStart) {
        indexStart = indexEnd
        indexEnd = newIndexEnd
    }
    //Aqui miramos el caso en que nos de un valor menor o mayor al string 
    if (indexStart < 0)
        indexStart = 0
  
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

