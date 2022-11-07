function every(array, callback){
    if(!(array instanceof Array)) throw new TypeError( array + 'in not an Array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    for (var i = 0; i < array.length; i++){
        var element = array[i]
        var returnCallback = callback(element)
        if (returnCallback !== callback(element)){
        
            return false
        }
    }
    return true
}