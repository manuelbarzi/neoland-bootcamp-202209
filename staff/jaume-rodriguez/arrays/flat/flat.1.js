function flat(array){
    var result = []
    for (var i = 0 ; i < array.length; i++){
        var element = array[i]
        if(element instanceof Array){
            flat(element)
        } else result[result.length] = element
    }
    return result
}