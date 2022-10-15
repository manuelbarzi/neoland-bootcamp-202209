function includes(array1, value){
    var result = false
    
    for (var i = 0; i < array1.length; i++){
        if (value === array1[i]){
            result = true
            return result
        }
    }
    return result
}