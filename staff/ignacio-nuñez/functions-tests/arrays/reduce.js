function reduce(array, callback, initialValue) {
    let previousValue = initialValue
    let index = 0

    if (initialValue === undefined) {
        previousValue = array[index]
        index = 1
    }
    for (let i = index; i < array.length; i++) {

        let callbackValue = callback(previousValue, array[i], i, ...array)

        previousValue = callbackValue
    }
    return previousValue
}