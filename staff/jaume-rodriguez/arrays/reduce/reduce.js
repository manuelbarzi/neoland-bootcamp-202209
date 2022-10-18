function reduce(array, callback, initialValue = []) {
    let acomulado = initialValue
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        acomulado = callback(acomulado, element)
    }
    return acomulado
}