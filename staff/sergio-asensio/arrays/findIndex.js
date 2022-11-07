function findIndex(array, callback) {
    var result = -1

    if (array.length === 0){
    return result
    }
    for (i = 0; i < array.length; i++) {
        var element = array[i]

        var match = callback(element)

        if (match) {
            return i
        }
    }
    return result

}

    
 



