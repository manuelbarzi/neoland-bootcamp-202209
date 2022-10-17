function includesArray(array, inputSearched, fromIndex = 0) {


    for (var i = fromIndex; i < array.length; i++) {
        var element = array[i]

        if (element === inputSearched) {
            return true
        }
    }
    //    for (var i = fromIndex; i < array.length; i++)
    //        if (array[i] === inputSearched) return true

    return false
}