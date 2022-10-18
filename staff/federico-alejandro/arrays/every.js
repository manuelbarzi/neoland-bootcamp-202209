function every(array, callback) {

    for (var i = 0; i < age.length; i++) {
        var element = array[i]
         
        var returnCallbackValue = callback(element);

        if(!returnCallbackValue)//,element, i, array)
        return false 

        
    }

    return true
}