function pop(array){

    for (var i = 0; i < array.length; i++){
        result = array[i]
        if (i === array.length - 1){
            array.length--
        }
    }
    return  result
}