function reduce(array, callback, initialValue) {
    let acumulado, index

    if (!initialValue) {
        acumulado = array[0]
        index = 1
    } else {
        acumulado = initialValue
        index = 0
    }

    for (let i = index; i < array.length; i++) {
        const element = array[i];
        acumulado = callback(acumulado, element)
    }
    return acumulado
}