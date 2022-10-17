function every(array, callback){
    for (var i = 0; i < array.length; i++){
        var element = array[i]
        var returnCallback = callback(element)
        if (returnCallback !== callback(element)){
        
            return false
        }
    }
    return true
}