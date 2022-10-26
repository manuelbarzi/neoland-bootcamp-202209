function indexOf(array, searchElement, fromIndex = 0){

    if (fromIndex < 0){
        fromIndex = fromIndex + array.length
    }

    if (fromIndex < 0){
        fromIndex = 0
    }

    for (var i = fromIndex; i < array.length; i++){
        if (searchElement === array[i]){
            return i
        }
    }
    return -1
}