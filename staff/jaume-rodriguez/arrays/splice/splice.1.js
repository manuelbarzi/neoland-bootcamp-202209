function splice(array, index = 0, deleteElement = 0, insertedElement) {
    let output = []
    let deleted = false
    let fromIndex = 0

    if (deleteElement !== 0 && index === 0) {
        fromIndex = deleteElement
        output[output.length] = insertedElement
    } else if (index === 0) {
        output[output.length] = insertedElement
    }


    for (let i = fromIndex; i < array.length; i++) {
        output[output.length] = array[i]
        deleted = false

        if (i === index - 1) {
            output[output.length] = insertedElement
            deleted = true
        }
        if (deleteElement !== 0 && deleted === true) {
            i = i + deleteElement
        }

    }
    return output
}