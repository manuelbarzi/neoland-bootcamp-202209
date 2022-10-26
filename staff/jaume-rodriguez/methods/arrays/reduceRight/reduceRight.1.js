function reduceRight(array, callback, initialValue) {
    let acumulado, index

    if (!initialValue) {
        acumulado = array[array.length - 1]
        index = array.length - 2
    } else {
        acumulado = initialValue
        index = array.length - 1
    }

    for (let i = index; i >= 0; i--) {
        const element = array[i]
        acumulado = callback(acumulado, element)
    }

    return acumulado
}