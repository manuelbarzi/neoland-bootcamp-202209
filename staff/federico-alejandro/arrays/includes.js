function includes(array, element, fromIndex = 0){
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    
    if(fromIndex < 0)
    fromIndex = 0

    for (i = fromIndex; i < array.length; i++) {

        if (array[i] === element)
        return true
    }
    return false
}
