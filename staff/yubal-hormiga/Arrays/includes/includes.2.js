function includes(array1, searchElement) {
    for (var i = 0; i < array1.length; i++) {
        var search = array1[i]
        if (searchElement === search)
            return true
    }
    return false
}
