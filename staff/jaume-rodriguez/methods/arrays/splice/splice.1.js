function splice(array, fromIndex = 0, deleteElementCount = 0) {
    let output = []
    let deleted = false
    let aux = 0
    let arguArray = []
    // Capturamos todos los arguments que nos interesan
    for (let i = 3; i < arguments.length; i++) {
        arguArray[arguArray.length] = arguments[i]
    }
    {   // Condiciones en caso de negativos o num superior a length
        if (fromIndex < 0) {
            fromIndex = fromIndex + array.length
        }
        if (fromIndex < 0) {
            fromIndex = 0
        }
        if (fromIndex > array.length) {
            fromIndex = array.length
        }
    }
    // Si fromIndex es 0, insertamos y borramos antes de empezar el bucle
    {
        if (fromIndex === 0 && deleteElementCount !== 0) {
            aux = deleteElementCount
            output[output.length] = arguments
        } else if (fromIndex === 0) {
            output[output.length] = arguments
        }
    }
    // Añadimos elementos al array y luego "borramos" saltando el índice con i
    for (let i = aux; i < array.length; i++) {
        output[output.length] = array[i]
        deleted = false

        if (i === fromIndex - 1) {
            output[output.length] = arguments
            deleted = true
        }
        if (deleteElementCount !== 0 && deleted === true) {
            i = i + deleteElementCount
        }

    }
    return output
}