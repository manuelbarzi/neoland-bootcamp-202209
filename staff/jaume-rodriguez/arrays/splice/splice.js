//TODO Negative and arguments version

function splice(array, index = 0, deleteElement = 0) {
    let output = []
    let deleted = false
    let fromIndex = 0
    let arguArray = []

    for (let i = 3; i < arguments.length; i++) {
        arguArray[arguArray.length] = arguments[i]
    }

    if (index < 0) {
        index = index + array.length
    }
    if (index < 0) {
        index = 0
    }
    if (index > array.length) {
        index = array.length
    }

    if (deleteElement !== 0 && index === 0) {
        fromIndex = deleteElement
        output[output.length] = arguArray
    } else if (index === 0) {
        output[output.length] = arguArray
    }

    for (let i = fromIndex; i < array.length; i++) {
        output[output.length] = array[i]
        deleted = false

        if (i === index - 1) {
            output[output.length] = arguArray
            deleted = true
        }
        if (deleteElement !== 0 && deleted === true) {
            i = i + deleteElement
        }

    }
    return output
}