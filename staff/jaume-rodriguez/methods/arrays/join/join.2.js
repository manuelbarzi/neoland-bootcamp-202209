function join(array, separator){
    var result = ""

    if (separator === undefined)
        separator = ","

    for (var i = 0; i < array.length; i++){
        if(i < array.length - 1){
            result += array[i] + separator
        } else{
            result += array[i]
        }
    }
    return result
}