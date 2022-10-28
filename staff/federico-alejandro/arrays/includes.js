function includes(array, element, fromIndex = 0) {

    
    if (fromIndex < 0) fromIndex = 0

    for (i = fromIndex; i < array.length; i++){

        if (array[i] === element)
            return true
    }
    return false
}