function includes(array, searchElement, fromIndex){

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