function length(array){
    var result = 0

    for(i=0; array[i] !== undefined; i++){
        result++
    }
    return result
}