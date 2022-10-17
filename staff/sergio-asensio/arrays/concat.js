function concat(array1, array2) {
    var result = []

    for (var i = 0; i < array1.length; i++) {
        result[result.length] = array1[i]
    }

    for (var i = 0; i < array2.length; i++) {
        result[result.length] = array2[i]
    }

    return result
}