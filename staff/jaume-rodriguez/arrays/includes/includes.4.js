function includes(array, searchElement, fromIndex){

    if (fromIndex < 0){
        fromIndex += array.length
    }

    if (fromIndex >= array.length){
        return false
    }

    if(fromIndex === undefined){
        fromIndex = 0
    }

    for (var i = fromIndex; i < array.length; i++){
        if (searchElement === array[i]){
            return true
        }
    }
    return false
}