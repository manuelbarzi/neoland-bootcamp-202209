function includes(array, check, fromIndex = 0) {

    for (let i = fromIndex; i < array.length; i++) {
         if (check === array[i]) {
           return true
         }
        
    }
    return false
}