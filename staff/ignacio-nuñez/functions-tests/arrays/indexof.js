function indexOf(array, element, fromIndex = 0) {

    if (fromIndex === Infinity) return -1

    if (fromIndex < 0) {
        fromIndex += array.length

        if(fromIndex < 0) fromIndex= 0
    }


    for (i = fromIndex; i < array.length; i++) {
        if (array[i] === element)
            return i
    }

    return -1
}