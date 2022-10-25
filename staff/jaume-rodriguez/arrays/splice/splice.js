//TODO Negative and arguments version

function splice(array, deleteFromIndex = 0, deleteElementCount = 0) {
    let output = []
    let arguArray = []
    // Capturamos todos los arguments que nos interesan
    for (let i = 3; i < arguments.length; i++) {
        arguArray[arguArray.length] = arguments[i]
    }
    {   // Condiciones en caso de negativos o num superior a length
        if (deleteFromIndex < 0) {
            deleteFromIndex = deleteFromIndex + array.length
        }
        if (deleteFromIndex < 0) {
            deleteFromIndex = 0
        }
        if (deleteFromIndex > array.length) {
            deleteFromIndex = array.length
        }
    }
    // Primero borramos y luego insertamos desde la nueva array output
    for (let i = 0; i < array.length; i++) {
        if (i === deleteFromIndex) {
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