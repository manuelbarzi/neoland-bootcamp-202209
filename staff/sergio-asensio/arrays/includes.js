function includes(array, element, fromIndex = 0) {
    var result = 'false'
    if (fromIndex < 0) {
        fromIndex = fromIndex + array.length

    }
    for (var i = fromIndex; i < array.length && result != 'true'; i++) {
        var aux = array[i]
        if (aux === element) {
            result = 'true'
        }

    }
    return result
}



