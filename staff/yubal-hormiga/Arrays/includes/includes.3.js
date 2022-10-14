function includes(array1, searchElement, fromIndex = 0) {
    for (var i = fromIndex; i < array1.length; i++) {
        var search = array1[i]
        if (searchElement === search)
            return true
    }
    return false
}
