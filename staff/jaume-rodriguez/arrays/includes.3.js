function includes(array1, value, index){
    var result = false

    if(index === undefined){
    for (var i = 0; i < array1.length; i++){
        if (value === array1[i]){
            result = true
            return result
        }
    }
    }
    if (index >= array1.length){
        return result
    }
    if (value === array1[index]){
        result = true
        return result
    }
    return result
}