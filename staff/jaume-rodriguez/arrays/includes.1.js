function includes(array, searchElement){
    var result = false
    
    for (var i = 0; i < array.length; i++){
        if (searchElement === array[i]){
            result = true
            return result
        }
    }
    return result
}