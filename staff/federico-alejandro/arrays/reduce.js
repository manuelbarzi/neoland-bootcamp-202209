function reduce(array, callback, initialValue = 0) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array')
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function')

    var previousValue = initialValue

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        if (initialValue === 0) {
            previousValue = array[i]
            i++
            initialValue++
        }

        var returnCallbackValue = callback(previousValue, array[i], i, ...array)
        previousValue = returnCallbackValue
    }
    return previousValue

}