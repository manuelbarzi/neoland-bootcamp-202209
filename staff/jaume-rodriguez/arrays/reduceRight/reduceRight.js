function reduceRight(array, callback, initialValue = []) {
    let acomulado = initialValue
    for (let i = array.length - 1; i >= 0; i--) {
        const element = array[i]
        acomulado = callback(acomulado, element)
    }
    return acomulado
}