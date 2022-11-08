function indexOf(array, searchElement, fromIndex = 0){
    var result = ''

    if (fromIndex < 0){
        fromIndex = array.length + fromIndex
    }
    
    for (var i = fromIndex; i < array.length; i++) {
        if (array[i] === searchElement) {
            result = i
            return result
        }
    }
    return result = -1
}

