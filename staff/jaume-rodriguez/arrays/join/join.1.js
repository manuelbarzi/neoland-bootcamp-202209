function join(array){
    var result = ""

    for (var i = 0; i < array.length; i++){
        if(i < array.length - 1){
            result += array[i] + ","
        } else{
            result += array[i]
        }
    }
    return result
}