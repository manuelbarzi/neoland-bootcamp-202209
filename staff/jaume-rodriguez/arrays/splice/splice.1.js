//TODO Negative and arguments version

function splice(array, deleteFromIndex = 0, deleteElementCount = 0) {
    let output = []
    let deleted = false
    let fromIndex = 0
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
    // Si deleteFromIndex es 0, insertamos y borramos antes de empezar el bucle
    {
        if (deleteFromIndex === 0 && deleteElementCount !== 0) {
            fromIndex = deleteElementCount
            output[output.length] = arguments
        } else if (deleteFromIndex === 0) {
            output[output.length] = arguments
        }
    }
    // Añadimos elementos al array y luego "borramos" saltando el índice con i
    for (let i = fromIndex; i < array.length; i++) {
        output[output.length] = array[i]
        deleted = false

        if (i === deleteFromIndex - 1) {
            output[output.length] = arguments
            deleted = true
        }
        if (deleteElementCount !== 0 && deleted === true) {
            i = i + deleteElementCount
        }

    }
    return output
}