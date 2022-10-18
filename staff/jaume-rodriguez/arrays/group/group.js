function group(array, callback) {
    let result = []
    let type1 = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if (!!callback(element)) {
            result[result.length] = element
        } else {
            type1[type1.length] = element
        }
    }
    for (let j = 0; j < type1.length; j++) {
        result[result.length] = type1[j]
    }
    return result
}