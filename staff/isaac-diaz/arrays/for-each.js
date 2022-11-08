function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var elem = array[i]

        callback(elem, i)
    }
}