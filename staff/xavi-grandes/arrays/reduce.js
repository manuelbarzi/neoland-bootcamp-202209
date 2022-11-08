function reduce (ArrayNumberToReduce, sumElements){

    result = 0

    for (let i = 0; i < ArrayNumberToReduce.length; i++){
        const numbertosum = ArrayNumberToReduce[i]

        if (i === 0){
            inicio = sumElements(0, ArrayNumberToReduce[i])
            result = inicio
        } else {
            operacion = sumElements(result, ArrayNumberToReduce[i])
            result = operacion
        }        
    }
    return result
}