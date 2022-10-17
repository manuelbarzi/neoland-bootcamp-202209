function includes(array, searchElement){
    
    for (var i = 0; i < array.length; i++){
        if (searchElement === array[i]){
            return true
        }
    }
    return false
}