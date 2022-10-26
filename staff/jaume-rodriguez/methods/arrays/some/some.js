function some(array, callback){
    for( var i = 0; i < array.length; i++){
        var element = array[i]
        if (!!callback(element)){
            return true
        }
    }
    return false
}