function splice(array, fromIndex = 0, deleteElementCount = 0) {
    let output = []
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
    // Primero borramos y luego insertamos desde la nueva array output
    for (let i = 0; i < array.length; i++) {
        if (i === fromIndex) {
            i = i + deleteElementCount
            for (let j = 0; j < arguArray.length; j++) {
                output[output.length] = arguArray[j]
            }
        }
        if (i < array.length) {
            output[output.length] = array[i]
        }
    }
    return output
}