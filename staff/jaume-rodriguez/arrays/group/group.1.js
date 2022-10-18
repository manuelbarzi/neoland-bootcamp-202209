function group(array, callback) {
    let result = []
    let type = ''

    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        callback(element)
        if (element.type === callback(element)) {
            type = callback(element)
        }
        result[length] = type
    }
    return result
}