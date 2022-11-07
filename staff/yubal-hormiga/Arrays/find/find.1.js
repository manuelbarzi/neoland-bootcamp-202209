function find(array1,i = 0,callback){
    
    if (!(array1 instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')
    
    for (var i = index; i < array1.length; i++){
        var n = array1[i]
        
         var returnCallback = callback(n)
         if ( returnCallback) {
            result[result.length] = n
                    
         }
    }
    return result
}

