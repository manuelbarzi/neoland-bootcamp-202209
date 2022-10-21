function find(array, callback) {

    for (i = 0; i < array.length; i++) {
        var element = array[i]

        var match = callback(element)

        if (match) {
            return array[i]
        }
    }
    result = 'undefined'
    return result
}